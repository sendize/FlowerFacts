var express = require('express');
var router = express.Router();
const dialogflow = require('../fulfillment/flowerFacts');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', dialogflow.app);

module.exports = router;
