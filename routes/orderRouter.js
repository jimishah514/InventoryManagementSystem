const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController.js");

router.get("/", orderController.getOrders);
router.get("/:id", orderController.getOrderByID);
router.post("/", orderController.addOrder);

module.exports = router;
