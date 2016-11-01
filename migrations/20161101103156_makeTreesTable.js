
exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('trees', (table) => {
    table.increments('id')
    table.string('name')
    table.string('fruit')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('trees')
}
