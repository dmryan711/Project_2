var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.json({Favorites:"Dummy Data"});
});

router.post('/',function(req,res,next){
    
})

module.exports = router;