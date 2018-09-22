import React, { Component } from "react";
// compose function to bind queries to components
import { graphql, compose } from "react-apollo";
import { getAuthorsQuery, addBookMutation } from "../queries/queries";

class AddBook extends Component {
  constructor(props) {
    super(props);

    //keeps track of each form fields
    this.state = {
      //initial fields which are empty
      name: "",
      genre: "",
      authorId: ""
    };
  }
  state = {};
  displayAuthors() {
    //access data with compose
    var data = this.props.getAuthorsQuery;
    console.log(this.props);
    if (data.loading) {
      return <option>Loading Authors</option>;
    } else {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }

  submitForm(e) {
    //prevent default behaviour, stops refreshing the page
    e.preventDefault();
    this.props.addBookMutation();
  }
  render() {
    console.log(this.props);
    return (
      <form id="add-book" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label>Book name:</label>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input
            type="text"
            onChange={e => this.setState({ genre: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Author:</label>
          <select onChange={e => this.setState({ authorId: e.target.value })}>
            <option>Select Authors</option>
            {this.displayAuthors()}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
