const express = require('express');
const router = express.Router();
const { getWorkfoce } = require('../../controllers/workforceController')

router.get('/workforce', function(req, res) {
    getWorkfoce(req, res)
})
  
module.exports = router;