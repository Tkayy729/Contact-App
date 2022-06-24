
var express = require('express')
const multer = require("multer");
var app = express()
var bodyParser = require('body-parser');
var path = require('path');
var File = require("./db/imageSchema")


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(`${__dirname}/public`));

//Configuration for Multer
const multerStorage = multer.diskStorage({
	destination: (req, file, cb) => {
	  cb(null, "public");
	},
	filename: (req, file, cb) => {
	  const ext = file.mimetype.split("/")[1];
	  cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
	},
  });

  const multerFilter = (req, file, cb) => {
	if (file.mimetype.split("/")[1] === "png") {
	  cb(null, true);
	} else {
	  cb(new Error("Not a png File!!"), false);
	}
  };

  const upload = multer({
	storage: multerStorage,
	fileFilter: multerFilter,
  });

app.post("/api/uploadFile", upload.single("myFile"), async (req, res) => {
	// Stuff to be added later
	console.log(req.file);
	try {
		const newFile = await File.create({
		  name: req.file.filename,
		});
		res.status(200).json({
		  status: "success",
		  message: "File created successfully!!",
		});
	  } catch (error) {
		res.json({
		  error,
		});
	  }
  });
  
  app.get("/api/getFiles", async (req, res) => {
	try {
	  const files = await File.find();
	  res.status(200).json({
		status: "success",
		files,
	  });
	} catch (error) {
	  res.json({
		status: "Fail",
		error,
	  });
	}
  });

app.use("/", (req, res) => {
	res.status(200).render("index");
  });

module.exports = app;