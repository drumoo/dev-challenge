const Material = require("./materialsModel");
const sales_orderJSON = require("../db/sales_orders.json");

class Sales_orderModel extends Material.Material {
    constructor({ MaterialName, SalesOrderID, Quantity }) {
        super({ MaterialName});
        this.id = SalesOrderID;
        this.quantity = Quantity;
    }
} 

function treatJSON() {
    const sales_orders = [];

    sales_orderJSON.forEach(el => {
        sales_orders.push(new Sales_orderModel(el));
    })

    return new Promise((resolve) => {
        resolve(sales_orders);
    })
}

module.exports = {
    treatJSON,
}