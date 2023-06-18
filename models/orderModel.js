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

const addOrder = async (order) => {
  await knex.raw(
    `insert into "order" (customer_id,grand_total) values (${order.customer_id},${order.grand_total})`
  );

  const orderResponse = await knex.raw(
    `SELECT currval(pg_get_serial_sequence('order','order_id'));`
  );

  const order_id = orderResponse.rows[0].currval;

  for (let i = 0; i < order.order_items.length; i++) {
    await knex.raw(
      `insert into order_item (order_id, product_id, quantity, base_price, total_price) values (${order_id},${order.order_items[i].product_id},${order.order_items[i].quantity},${order.order_items[i].base_price},${order.order_items[i].total_price})`
    );
  }
  return { status: true };
};

module.exports = {
  listAllOrders,
  orderByID,
  addOrder,
};
