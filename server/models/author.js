const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  //Describes the different dataType and objects that define books
  name: String,
  age: Number
});

//making the model(collection name) which is Author that has a schema = name and age.
module.exports = mongoose.model("Author", authorSchema);
