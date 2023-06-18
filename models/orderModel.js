const knex = require("../db/knex.js");

const listAllOrders = async () => {
  const data = await knex.raw(`SELECT * FROM "order";`);
  const orders = data.rows;

  for (let i = 0; i < orders.length; i++) {
    let orderItem = await knex.raw(
      `SELECT order_item_id, product_id, quantity, base_price, total_price FROM "order_item" WHERE order_id = ${orders[i].order_id};`
    );
    orders[i].order_items = orderItem.rows;
  }

  return orders;
};

const orderByID = async (order_id) => {
  const data = await knex.raw(
    `SELECT * FROM "order" where order_id=${order_id};`
  );

  const order = data.rows[0];

  let orderItem = await knex.raw(
    `SELECT order_item_id, product_id, quantity, base_price, total_price FROM "order_item" WHERE order_id = ${order.order_id};`
  );
  order.order_items = orderItem.rows;

  return order;
};

module.exports = {
  listAllOrders,
  orderByID,
};
