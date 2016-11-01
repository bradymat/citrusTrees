const Knex = require('knex')
const knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

const knex = Knex(knexConfig)

let getTrees = (id) => {
  return knex('trees')
}
let addTree = (tree) => {
  return knex('trees').insert(tree)
}
let deleteTreeById = (id) => {
  return knex('trees').where('id', id).del()
}

module.exports = {
  getTrees,
  addTree,
  deleteTreeById
}
