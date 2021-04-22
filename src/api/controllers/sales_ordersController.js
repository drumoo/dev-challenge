const Sales_orders = require("../models/sales_ordersModel");
const searchItem = require('../utils/searchItem');

async function getSales_orders(req, res) {
    try {
        const sales_orders = await Sales_orders.treatJSON();

        let item = req.query;
        item = JSON.parse(JSON.stringify(item));

        const result = [];

        sales_orders.forEach(sales_order => {
            for(let prop in sales_order) {
                if(searchItem(sales_order[prop], item.text)) {
                    result.push(sales_order);
                }
            }
        })

        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getSales_orders,
}