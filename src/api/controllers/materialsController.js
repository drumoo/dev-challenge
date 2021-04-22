const Material = require("../models/materialsModel");
const searchItem = require('../utils/searchItem');


async function getMaterials(req, res) {
    try {
        const materials = await Material.treatJSON();

        let item = req.query;
        item = JSON.parse(JSON.stringify(item));

        const result = [];

        materials.forEach(material => {
            for(let prop in material) {
                if(searchItem(material[prop], item.text)) {
                    result.push(material);
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
    getMaterials,
}