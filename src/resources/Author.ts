import { Attribute } from '@datx/core';
import { Resource } from '@datx/jsonapi-react';

export class Author extends Resource {
	static type = 'author';

	@Attribute({ isIdentifier: true })
	public id!: string | number;

	@Attribute()
	public name!: string;

	@Attribute()
	public long_name: string;
}
