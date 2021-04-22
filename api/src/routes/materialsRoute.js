const express = require('express');
const router = express.Router();
const { getMaterials } = require('../../controllers/materialsController');

router.get('/produts', (req, res) => {
    getMaterials(req, res);
});

module.exports = router;