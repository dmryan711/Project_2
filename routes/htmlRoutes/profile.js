var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('parent', { title: 'Manage Profile' });
  });

  module.exports = router;