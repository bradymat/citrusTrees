exports.seed = (knex, Promise) => {
  return knex('trees').del()
    .then(() => {
      return Promise.all([
        knex('trees').insert({id: 1, name: 'Lemon Tree', fruit: 'Lemons'}),
        knex('trees').insert({id: 2, name: 'Orange Tree', fruit: 'Oranges'}),
        knex('trees').insert({id: 3, name: 'Lime Tree', fruit: 'Limes'})
      ])
    })
}
