var sendEmail=require("./email");
var express = require('express');
var router = express.Router();

router.route("/confirmation")
.post(function(req,res,next){
	sendEmail(req.body.to,req.body.subject,"<h1>do as fast as possible</h1>");
	res.json({success:true});
});

module.exports=router;