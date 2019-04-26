var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //Ad DB Stuff here
  res.json({Users:"Dummy Data"});
});

//Add User
router.post('/',function(req,res,next){
  //Add DB stuff here
});



module.exports = router;
