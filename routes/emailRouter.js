var sendEmail=require("./email");
var express = require('express');
var router = express.Router();

router.route("/confirmation")
.post(function(req,res,next){
	if(req.body.key=process.env.key){
		sendEmail(req.body.to,req.body.subject,"do as fast as possible");
		res.json({success:true});
	}
	else{
		res.json({success:false});
	}

});

module.exports=router;