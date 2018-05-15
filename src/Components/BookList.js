import React, { Component } from "react";
import Book from "./Book";


export default class BookList extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (

          <div>
            <ul className="book-list">
              {this.props.books.map((book, index) => (
                <li key={index}>
                  <Book
                    item={book}
                  />
                </li>
              ))}
            </ul>
      </div>
            
        )
      };
  }

