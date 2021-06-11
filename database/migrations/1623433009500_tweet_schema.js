'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TweetSchema extends Schema {
  up() {
    this.create('tweets', (table) => {
      table.increments()
      table
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('users.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('content', 250).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('tweets')
  }
}

module.exports = TweetSchema
