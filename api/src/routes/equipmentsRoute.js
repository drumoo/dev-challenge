const express = require('express');
const router = express.Router();
const { getEquipments } = require('../../controllers/equipmentsController')

router.get('/equipments', (req, res) => {
    getEquipments(req, res);
});


module.exports = router;
