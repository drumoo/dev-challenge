const Equipment = require("../models/equipmentsModel");
const searchItem = require('../utils/searchItem');

async function getEquipments(req, res) {
    try {
        const equipments = await Equipment.treatJSON();
        let item = req.query;
        item = JSON.parse(JSON.stringify(item));

        const result = [];

        equipments.forEach(equipment => {
            for(let prop in equipment) {
                if(searchItem(equipment[prop], item.text)) {
                    result.push(equipment);
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
    getEquipments,
}