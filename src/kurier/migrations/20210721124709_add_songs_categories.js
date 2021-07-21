const TABLE_NAME = 'songs_categories';

exports.up = function (knex) {
	return knex.schema.createTable(TABLE_NAME, function (t) {
		t.integer('song_id').unsigned().nullable();
		t.integer('category_id').unsigned().nullable();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.unique(['song_id', 'category_id']);

		t.foreign('song_id').references('songs.id');
		t.foreign('category_id').references('categories.id');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable(TABLE_NAME);
};
