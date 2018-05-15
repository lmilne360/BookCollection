import React, { Component } from "react";

const url = "http://localhost:4000/books";

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
    this.getBooks = this.getBooks.bind(this);
    this.getBooks();
  }

  getBooks() {

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ books: data});
      });
  }

  render() {

    return (
      <div>
          {this.state.books}
      </div>
    );
  }
}
