var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/:id", function(req, res, next) {
    console.log(req.params.id);
    
    db.Events.findAll({
      include: [
        {
          model: db.Schoolinfo,
          where: { school_id: req.params.id }
        }
      ]
    }).then((data, err) => {
      if (err) throw err;
    

      let schoolData = data[0].dataValues.Schoolinfo.dataValues;
      let events = data[0].dataValues
       
      res.render("school", { schoolData: schoolData, events: events });
    });
    
});


module.exports = router;
