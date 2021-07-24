import { ManyToManyProcessor } from '@/kurier/processors/ManyToManyProcessor';
import Author from '@/kurier/resources/author';
import Category from '@/kurier/resources/category';
import { Resource } from 'kurier';

export default class Song extends Resource {
	static schema = {
		attributes: {
			title: String,
			lyrics: String,
			slug: String,
			chords_url: String,
		},
		relationships: {
			author: {
				type: () => Author,
				belongsTo: true,
				foreignKeyName: 'author_id',
			},
			categories: {
				type: () => Category,
				manyToMany: true,
				foreignKeyName: 'category_id',
			},
		},
	};
}
export class SongManyToManyProcessor<ResourceT extends Resource> extends ManyToManyProcessor<ResourceT> {
	static resourceClass = Song;
}
