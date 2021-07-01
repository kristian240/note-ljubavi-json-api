import { Resource } from 'kurier';

export default class Author extends Resource {
	static schema = {
		attributes: {
			name: String,
			long_name: String,
		},
		relationships: {},
	};
}
