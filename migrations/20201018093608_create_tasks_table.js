
exports.up = function (knex) {
  return knex.schema
    .createTable('Person', function (table) {
      table.bigincrements('id').primary();
      table.string('first_name');
      table.string('last_name');
      table.varchar('user_name');
      table.varchar('password');
      table.varchar('email');
      table.string('job');
      table.string('country');
      table.string('image');
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('Person');
};
