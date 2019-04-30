var express = require('express');
var router = express.Router();
const db = require("../models");

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Grades.findAll().then((data, err)=>{
    if (err) throw (err);
    console.log(data);
    res.render("index", { data });
  });
  
});

module.exports = router;
