var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('parent', { favorites: '' });
  });

  module.exports = router;