exports.up = function(knex) {
    return knex.schema.createTable('consultations', function(table) {
      table.increments('id').primary();
      table.string('firstName').notNullable();
      table.string('lastName').notNullable();
      table.string('email').notNullable();
      table.string('phone').notNullable();
      table.text('description').notNullable();
      table.string('hairType').notNullable();
      table.string('hairTexture').notNullable();
      table.string('scalpCondition').notNullable();
      table.text('hairConcerns').notNullable();
      table.string('washingFrequency').notNullable();
      table.text('hairProducts').notNullable();
      table.string('heatStylingFrequency').notNullable();
      table.string('colorTreatment').notNullable();
      table.text('additionalInfo');
      table.timestamps(true, true);
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('consultations');
};
  
