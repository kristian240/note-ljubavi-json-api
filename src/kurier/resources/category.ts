import { ManyToManyProcessor } from '@/kurier/processors/ManyToManyProcessor';
import Song from '@/kurier/resources/song';
import { Resource } from 'kurier';

export default class Category extends Resource {
	static schema = {
		attributes: {
			name: String,
			description: String,
		},
		relationships: {
			songs: {
				type: () => Song,
				manyToMany: true,
				foreignKeyName: 'song_id',
			},
		},
	};
}

export class CategoryManyToManyProcessor<ResourceT extends Resource> extends ManyToManyProcessor<ResourceT> {
	static resourceClass = Category;
}
