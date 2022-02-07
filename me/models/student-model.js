const mongoose = require("mongoose");

// this is the schema
var StudentSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age:Number,
    department:String
});

//mongoose model takes two params, the name of the collection and the schema
var StudentModel = mongoose.model("student" ,StudentSchema) ;

module.exports = StudentModel;