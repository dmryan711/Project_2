var express = require('express');
var router = express.Router();
var db = require('../models')

router.get('/:grade',function(req,res,next){
    
    db.Schoolinfo.findAll({
      include: [{ 
        model: db.Grades,  
        where: { grade: req.params.grade } 
    }]
    }).then((data, err) => {
      if (err) throw err;
        
        res.render("results", { "data": data, "grade": req.params.grade });
      })
    
});
router.post('/',function(req,res,next){
    console.log(req.body);
    db.SchoolGrades.create(req.body).then(function (SchoolGradeCreated) {
        res.json(SchoolGradeCreated);
    });
});

module.exports = router;