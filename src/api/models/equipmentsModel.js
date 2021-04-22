const equipmentsJSON = require('../db/equipments.json');

class Equipment {
    constructor({ EquipmentID, EquipmentName }) {
        this.id = EquipmentID;
        this.name = EquipmentName;
    }
}

function treatJSON() {
    const equipments = [];

    equipmentsJSON.forEach(el => {
    equipments.push(new Equipment(el));
    })

    return new Promise((resolve) => {
        resolve(equipments);
    })
}

module.exports = {
    treatJSON,
}