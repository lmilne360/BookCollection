import React, { Component } from "react";
import Book from "./Book";
import JwPagination from "jw-react-pagination";

// import { Link } from "react-router";

const customLabels = {
  first: "<<",
  last: ">>",
  previous: "<",
  next: ">"
};
export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.onChangePage = this.onChangePage.bind(this);
    this.onBookSelect = this.onBookSelect.bind(this);
    this.state = {
      exampleItems: this.props.books,
      pageOfItems: [],
      bookSelected: false
    };
  }
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  onBookSelect(index) {
    console.log("book selected");
    if (this.state.bookSelected) {
      return this.setState({ bookSelected: false, selectedBook: null });
    }
    const book = this.state.pageOfItems[index];
    this.setState({ selectedBook: book, bookSelected: true });
  }

  render() {
    return (
      <div>
        {this.state.bookSelected ? (
          <Book
            item={this.state.selectedBook}
            selectBookProp={this.onBookSelect}
          />
        ) : (
          <div>
            <ul className="book-list">
              {this.state.pageOfItems.map((book, index) => (
                <li key={index}>
                  <Book
                    item={book}
                    selectBookProp={() => this.onBookSelect(index)}
                  />
                </li>
              ))}
            </ul>
            <JwPagination
              items={this.props.books}
              onChangePage={this.onChangePage}
              labels={customLabels}
              disableDefaultStyles={true}
            />
          </div>
        )}
      </div>
    );
  }
}
