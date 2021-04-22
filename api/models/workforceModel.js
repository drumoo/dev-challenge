const workforceJSON = require("../db/workforce.json");

class WorkforceModel {
    constructor({ WorkforceID, Name, Shift }) {
        this.id = WorkforceID;
        this.name = Name;
        this.shift = Shift;
    }
}

function treatJSON() {
    const workforce = [];

    workforceJSON.forEach(el => {
        workforce.push(new WorkforceModel(el));
    })

    return new Promise((resolve) => {
        resolve(workforce);
    })
}

module.exports = {
    treatJSON
}