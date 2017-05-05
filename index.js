var express = require("express");
var multer = require("multer");

var app = express();
var upload = multer();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.post("/file/size", upload.single("selectedFile"), function(req, res) {
	res.send({"fileSize": req.file.size + "bytes"});
});

app.listen(port, function(req, res) {
	console.log("App started on http://localhost:" + port);
});