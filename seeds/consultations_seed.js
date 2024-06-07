/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const consultations = require('../seed_data/consultations');

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('consultations').del();
  // Inserts seed entries
  await knex('consultations').insert(consultations);
};

