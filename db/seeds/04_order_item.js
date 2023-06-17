/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
	return knex.raw(`
		DELETE FROM "order_item";
		ALTER SEQUENCE "order_item_order_item_id_seq" RESTART WITH 1;

		INSERT INTO "order_item" ("order_id", "product_id", "quantity", "base_price", "total_price") VALUES
			(1, 1, 1, 999.99, 999.99),
			(1, 2, 2, 1199.99, 2399.98),
			(2, 3, 3, 899.99, 2699.97),
			(3, 1, 4, 999.99, 3999.96);
	`);
};
