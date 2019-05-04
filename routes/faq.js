const express = require("express");
const router = express.Router();

router.get("/", (req, res, next)=>{
    res.render("faq", {layout:false});
});

module.exports = router;