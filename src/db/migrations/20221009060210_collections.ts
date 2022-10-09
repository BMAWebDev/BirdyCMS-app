import { Knex } from 'knex';

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable('collections', (table) => {
    table.increments('id', { primaryKey: true });

    table.string('name').notNullable();
    table.string('slug').notNullable();
    table.boolean('is_editable').notNullable().defaultTo(0);

    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

export const down = async (knex: Knex): Promise<void> => {
  await knex.schema.dropTable('collections');
};
