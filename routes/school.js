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

      res.render("school");
    });
    
});


module.exports = router;
