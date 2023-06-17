/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
	return knex.raw(`
		DELETE FROM "product";
		ALTER SEQUENCE "product_product_id_seq" RESTART WITH 1;

		INSERT INTO "product" ("product_name", "quantity", "price") VALUES
			('Apple iPhone 13 Pro', 10, 999.99),
			('Samsung Galaxy S22 Ultra', 20, 1199.99),
			('Google Pixel 6 Pro', 30, 899.99);
	`);
};
