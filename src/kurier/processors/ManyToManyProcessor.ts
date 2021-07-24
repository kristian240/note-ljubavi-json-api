import {
	camelize,
	DEFAULT_PRIMARY_KEY,
	KnexProcessor,
	KnexRecord,
	pluralize,
	Resource,
	ResourceSchemaRelationship,
	singularize,
} from 'kurier';

export class ManyToManyProcessor<ResourceT extends Resource> extends KnexProcessor<ResourceT> {
	static shouldHandle(resourceType: string): Promise<boolean> {
		return Promise.resolve(this.resourceClass?.type === resourceType);
	}

	async eagerFetchRelationship(
		key: string,
		result: ResourceT | ResourceT[],
		relationship: ResourceSchemaRelationship,
		baseResource: typeof Resource
	): Promise<KnexRecord[] | void> {
		// @ts-ignore
		if (!relationship.manyToMany) {
			return super.eagerFetchRelationship(key, result, relationship, baseResource);
		}

		const baseTableName = this.appInstance.app.serializer.resourceTypeToTableName(baseResource.type); // songs
		const camelCasedLocalResource = pluralize(camelize(baseResource.type));
		const camelCasedForeignResource = pluralize(camelize(relationship.type().type));
		const intermediateResourceType = singularize(camelize(`${camelCasedLocalResource} ${camelCasedForeignResource}`)); // songsCategories
		const intermediateResourceClass = this.appInstance.app.types.find(({ type }) => type === intermediateResourceType); // SongsCategories class
		const intermediateTableName = this.appInstance.app.serializer.resourceTypeToTableName(intermediateResourceType); // songs_categories

		const relationProcessor = (await this.processorFor(relationship.type().type)) as KnexProcessor<Resource>; // Category ResourceProcessor

		const query = relationProcessor.getQuery();

		const foreignType = relationProcessor.resourceClass.type; // category
		const foreignTableName = this.appInstance.app.serializer.resourceTypeToTableName(relationship.type().type);
		const sqlOperator = Array.isArray(result) ? 'in' : '='; // in
		// @ts-ignore
		const columns = relationProcessor.getColumns(this.appInstance.app.serializer); // [id, name, description]

		const primaryKey = baseResource.schema.primaryKeyName || DEFAULT_PRIMARY_KEY; // id

		const queryIn: string | string[] = Array.isArray(result) // [1]
			? result.map((resource: Resource) => resource[primaryKey])
			: result[primaryKey];

		const belongingPrimaryKey = intermediateResourceClass.schema.primaryKeyName || DEFAULT_PRIMARY_KEY; // id
		const localResurceForeignKey =
			intermediateResourceClass.schema.relationships[camelCasedLocalResource].foreignKeyName;
		const foreignResurceForeignKey =
			intermediateResourceClass.schema.relationships[camelCasedForeignResource].foreignKeyName;
		const belongingTableName = this.appInstance.app.serializer.foreignResourceToForeignTableName(foreignType); // belonging_categories

		return query
			.select(columns.map((field) => `${belongingTableName}.${field}`))
			.from(`${foreignTableName} as ${belongingTableName}`)
			.join(
				intermediateTableName,
				`${belongingTableName}.${belongingPrimaryKey}`,
				'=',
				`${intermediateTableName}.${foreignResurceForeignKey}`
			)
			.join(baseTableName, `${intermediateTableName}.${localResurceForeignKey}`, '=', `${baseTableName}.${primaryKey}`)
			.where(`${baseTableName}.${primaryKey}`, sqlOperator, queryIn);
	}
}
