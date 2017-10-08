var sendEmail=require("./email");
var express = require('express');
var router = express.Router();

router.route("/confirmation/:to")
.get(function(req,res,next){
	sendEmail(req.params.to,"verify yourself","<h1>do as fast as possible</h1>");
	res.json({success:true});
});

module.exports=router;