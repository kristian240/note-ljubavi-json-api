import Author from '@/kurier/resources/author';
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
				foreignKeyName: 'author_id',
			},
		},
	};
}
