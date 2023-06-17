/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
	return knex.raw(`
		DELETE FROM "order";
		ALTER SEQUENCE "order_order_id_seq" RESTART WITH 1;

		INSERT INTO "order" ("customer_id") VALUES
			(1),
			(2),
			(3);
	`);
};
