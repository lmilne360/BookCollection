import React, { Component } from "react";

export default class Book extends Component {
  state = {};
  render() {
    const { title, author, description, image } = this.props.item;

    return (
      <div >
        <h3> {title} </h3>
        <img src={image} alt="Book cover image" onError={ (e) => {e.target.src= `http://${image}`}}/>
      </div>
    );
  }
}
