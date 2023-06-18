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

const updateProductByID = async (req, res) => {
  const product_id = req.params.id;
  const product = req.body;
  product.product_name = `'${product.product_name}'`;
  product.product_id = product_id;

  const productResponse = await productModel.updateProductByID(product);
  res.status(200).send(productResponse);
};

module.exports = {
  getProducts,
  getProductByID,
  updateProductByID,
};
