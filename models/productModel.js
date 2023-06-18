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

module.exports = {
  listAllProducts,
  productByID,
};
