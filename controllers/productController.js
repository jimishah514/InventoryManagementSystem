const productModel = require("../models/productModel.js");

const getProducts = async (req, res) => {
  const products = await productModel.listAllProducts();
  res.status(200).send(products);
};

const getProductByID = async (req, res) => {
  const product_id = req.params.id;
  const product = await productModel.productByID(product_id);
  res.status(200).send(product);
};

module.exports = {
  getProducts,
  getProductByID,
};
