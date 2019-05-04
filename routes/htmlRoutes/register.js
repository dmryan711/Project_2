var express = require('express');
var router = express.Router();
var passport = require('passport');


router.get("/",function(req,res){
    res.render('register', {layout:false});
});

router.post('/', passport.authenticate('local-signup', {
    
    successRedirect: '/profile',
    failureRedirect: '/'
}
     
));

module.exports = router;