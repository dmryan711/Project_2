var express = require('express');
var router = express.Router();


router.get("/",function(req,res){
    res.json({message:"SIGN IN PAGE PLACEDHOLDER"});

});

module.exports = router;