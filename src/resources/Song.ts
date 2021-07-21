import { Author } from '@/resources/Author';
import { Category } from '@/resources/Category';
import { Attribute } from '@datx/core';
import { Resource } from '@datx/jsonapi-react';

export class Song extends Resource {
	static type = 'song';

	@Attribute({ isIdentifier: true })
	public id!: string | number;

	@Attribute()
	public title!: string;

	@Attribute()
	lyrics: string;

	@Attribute()
	slug: string;

	@Attribute()
	chordsUrl: string;

	@Attribute({ toOne: Author })
	author: Author;

	@Attribute({ toMany: Category })
	categories: Category;
}
