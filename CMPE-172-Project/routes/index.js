var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'CMPE 172 Web App Projec' });
});

module.exports = router;
