const TABLE_NAME = 'authors';

exports.up = function (knex) {
	return knex.schema.createTable(TABLE_NAME, function (t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('name').notNull();
		t.text('long_name').notNull();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable(TABLE_NAME);
};
