const Workforce = require("../models/workforceModel");
const searchItem = require('../utils/searchItem');

async function getWorkfoce(req, res) {
    try {
        const workforce = await Workforce.treatJSON()

        let item = req.query;
        item = JSON.parse(JSON.stringify(item));

        const result = [];

        workforce.forEach(worker => {
            for(let prop in worker) {
                if(searchItem(worker[prop], item.text)) {
                    result.push(worker);
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
    getWorkfoce,
}