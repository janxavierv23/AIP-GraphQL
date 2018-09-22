import { gql } from "apollo-boost";
//Queries
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;
const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;
const addBookMutation = gql`
  mutation {
    addBook(name: "", genre: "", authorId: "") {
      name
      genre
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation };
