const Purchase_orders = require("../models/purchase_ordersModel");
const searchItem = require('../utils/searchItem');

async function getPurchase_orders(req, res) {
    try {
        const purchase_orders = await Purchase_orders.treatJSON();

        let item = req.query;
        item = JSON.parse(JSON.stringify(item));

        const result = [];

        purchase_orders.forEach(purchase_order => {
            for(let prop in purchase_order) {
                if(searchItem(purchase_order[prop], item.text)) {
                    result.push(purchase_order);
                }
            }
        })

        res.writeHead(200, { 'Content-Type': 'application/json'})
        res.end(JSON.stringify(result))
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getPurchase_orders,
}