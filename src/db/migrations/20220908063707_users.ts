import { Knex } from 'knex';

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable('users', (table) => {
    table.increments('id', { primaryKey: true });

    table.string('username');
    table.string('password').notNullable();
    table.string('email_address').notNullable();
    table.string('role').notNullable().defaultTo('client');

    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

export const down = async (knex: Knex): Promise<void> => {
  await knex.schema.dropTable('users');
};
