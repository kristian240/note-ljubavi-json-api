import { Attribute } from '@datx/core';
import { Resource } from '@datx/jsonapi-react';

export class Category extends Resource {
	static type = 'category';

	@Attribute({ isIdentifier: true })
	public id!: string | number;

	@Attribute()
	public name!: string;

	@Attribute()
	public description: string;

	@Attribute({ toMany: 'song' })
	public songs: string;
}
