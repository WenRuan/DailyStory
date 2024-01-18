var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/logged-in', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Not logged in.')
});

module.exports = router;
