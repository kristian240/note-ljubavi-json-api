const TABLE_NAME = 'songs';

exports.up = function (knex) {
	return knex.schema.createTable(TABLE_NAME, function (t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('title').notNull();
		t.text('lyrics').notNull();
		t.string('slug').notNull();
		t.text('chords_url').nullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable(TABLE_NAME);
};
