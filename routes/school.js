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
      
      console.log(data);

      let schoolData = data[0].dataValues.Schoolinfo.dataValues;
      let events = data[0].dataValues;
       
      console.log("DEBUG SCHOOLDATA: ", schoolData);
      console.log("DEBUG EVENTS:", events);
      res.render("school", { "schoolData": schoolData, "events": events, layout: false });

    });
    
});


module.exports = router;
