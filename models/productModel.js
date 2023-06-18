const knex = require("../db/knex.js");

const listAllProducts = async () => {
  const data = await knex.raw(`SELECT * FROM "product";`);
  return data.rows;
};

const productByID = async (product_id) => {
  const data = await knex.raw(
    `SELECT * FROM "product" where product.product_id=${product_id};`
  );
  return data.rows;
};

const updateProductByID = async (product) => {
  const data = await knex.raw(
    `UPDATE "product"
    SET "product_name" = ${product.product_name}, "quantity" = ${product.quantity}, "price" = ${product.price}
    WHERE "product_id"=${product.product_id};`
  );
  return data.rows;
};

module.exports = {
  listAllProducts,
  productByID,
  updateProductByID,
};
