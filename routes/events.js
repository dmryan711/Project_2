var express = require('express');
var router = express.Router();
var db = require('../models/index');

/* GET Event listing. */
router.get('/:id', function(req, res, next) {

 db.Events.findAll({
   where:{
    school_id:req.params.id
   },
   attributes: ['event', 'date']
 }).then(function(event){
   res.json(event);
 });

});

//Add Event
router.post('/',function(req,res,next){
  db.Events.create(req.body).then(function(eventCreated){
      res.json(eventCreated);
  });

});



module.exports = router;