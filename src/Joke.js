import React, { Component } from "react";
import "./Joke.css";
class Joke extends Component {
  render() {
    const { text } = this.props;

    return (
      <div className="Joke">
        <div className="Joke-text">{text}</div>
      </div>
    );
  }
}
export default Joke;
