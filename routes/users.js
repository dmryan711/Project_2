var express = require('express');
var router = express.Router();
var db = require('../models/index');

/* GET users listing. */
router.get('/:id', function(req, res, next) {

 db.User.findOne({
   where:{
     id:req.params.id
   },
   attributes: ['id', 'first_name','last_name','email']
 }).then(function(userPost){
   res.json(userPost);
 });

});

//Add User
router.post('/',function(req,res,next){
  req.body.email = req.body.email.toLowerCase();
  db.User.create(req.body).then(function(userCreated){
      res.json(userCreated);
  });

});



module.exports = router;
