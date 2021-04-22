const express = require('express');
const router = express.Router();
const { getPurchase_orders } = require('../../controllers/purchase_ordersController')

router.get('/purchase_orders', (req, res) => {
    getPurchase_orders(req, res)
})

module.exports = router;
  