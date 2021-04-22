const MaterialModel = require("./materialsModel");
const purchase_ordersJSON = require("../db/purchase_orders.json")

class Purchase_orderModel extends MaterialModel.Material {
    constructor({ MaterialName, Quantity, PurchaseOrderID }) {
        super({ MaterialName });
        this.id = PurchaseOrderID;
        this.quantity = Quantity;
    }
}

function treatJSON() {
    const purchase_orders = [];

    purchase_ordersJSON.forEach(el => {
        purchase_orders.push(new Purchase_orderModel(el));
    })

    return new Promise((resolve) => {
        resolve(purchase_orders);
    })
}

module.exports = {
    treatJSON,
}