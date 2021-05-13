var express = require('express');
var router = express.Router();
var planetController = require('../controllers/insertPlanet')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ planets: 'planeta ok' });
});

router.post('/insertPlanets', planetController.newPlanet)


module.exports = router;
