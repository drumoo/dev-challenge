const express = require('express');
const router = express.Router();
const { getSales_orders } = require('../../controllers/sales_ordersController')

router.get('/sales_orders', (req, res) => {
    getSales_orders(req, res)
  })
  
module.exports = router;