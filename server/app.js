const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//Allow cross-origin requests
app.use(cors());
// mlab connection
mongoose.connect(
  "mongodb://janxavierv:Brobadoy2016@ds261072.mlab.com:61072/grapql-learn"
);
//once connection is open, fire a callback function
mongoose.connection.once("open", () => {
  console.log("We're connected to the database.");
});

// Middleware
app.use(
  "/graphql",
  graphqlHTTP({
    //defining our graph
    //mongo define the data to be stored
    schema, //es6
    graphiql: true
  })
);

//to start: nodemon app
app.listen(4000, () => {
  console.log("Now listening fo requests on port 4000");
});
