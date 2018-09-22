import React, { Component } from "react";
import BookList from "../src/components/BookList";
import AddBook from "../src/components/AddBook";
import "../src/index.css";

// Apollo
import ApolloClient from "apollo-boost";
//Wrap our app and inject whatever we receive from the server into the application
import { ApolloProvider } from "react-apollo"; //Sets up Apollo
//end point for requests. was setup with express under server folder.
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      // Injects what we requests from our server to our App
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Reading List</h1>

          {/* Our App */}
          <BookList />
          <AddBook />
          {/* Our App */}
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
