exports.up = function (knex) {
	return knex.schema.table('songs', function (t) {
		t.integer('author_id').unsigned().nullable();
		t.foreign('author_id').references('authors.id');
	});
};

exports.down = function (knex) {
	return knex.schema.table('songs', function (t) {
		t.dropColumn('author_id');
	});
};
