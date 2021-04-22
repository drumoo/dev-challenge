const materialsJSON = require('../db/materials.json');

class Material {
    constructor({ MaterialID, MaterialName }) {
        this.id = MaterialID;
        this.name = MaterialName;
    }
}

function treatJSON() {
    const materials = [];

    materialsJSON.forEach(el => {
        materials.push(new Material(el));
    })

    return new Promise((resolve) => {
        resolve(materials);
    })
}

module.exports = {
    treatJSON,
    Material
}