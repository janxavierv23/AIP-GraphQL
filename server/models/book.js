const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  //Describes the different dataType and objects that define books
  name: String,
  genre: String,
  authorId: String
});

//making the model(collection name) which are books that contains a schema = name, genre, authorId.
module.exports = mongoose.model("Book", bookSchema);
