const orderModel = require("../models/orderModel.js");

const getOrders = async (req, res) => {
  const orders = await orderModel.listAllOrders();
  res.status(200).send(orders);
};

const getOrderByID = async (req, res) => {
  const order_id = req.params.id;
  const orders = await orderModel.orderByID(order_id);
  res.status(200).send(orders);
};
const addOrder = async (req, res) => {
  const order = req.body;
  const orders = await orderModel.addOrder(order);
  res.status(200).send(orders);
};

module.exports = {
  getOrders,
  getOrderByID,
  addOrder,
};
