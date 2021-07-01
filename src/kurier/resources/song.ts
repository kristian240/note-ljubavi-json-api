import { Resource } from 'kurier';

export default class Song extends Resource {
	static schema = {
		attributes: {
			title: String,
			lyrics: String,
			slug: String,
			chords_url: String,
			author_id: Number,
		},
		relationships: {},
	};
}
