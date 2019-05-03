var express = require('express');
var router = express.Router();
var passport = require('passport');


router.get("/",function(req,res){
    res.render('signUp', { title: 'Sign Up for School Finder' });
});

router.post('/', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup'
}

));

module.exports = router;