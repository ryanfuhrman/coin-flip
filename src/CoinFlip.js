import React, { Component } from "react";
import Coin from "./Coin";

export default class CoinFlip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      face: "heads",
      flipCount: 0,
      faceCount: {
        heads: 0,
        tails: 0,
      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const faces = ["heads", "tails"];
    const result = faces[Math.floor(Math.random() * faces.length)];

    this.setState(prevState => ({
      face: result,
      flipCount: prevState.flipCount + 1,
      faceCount: {
        heads:
          result === "heads"
            ? prevState.faceCount.heads + 1
            : prevState.faceCount.heads,
        tails:
          result === "tails"
            ? prevState.faceCount.tails + 1
            : prevState.faceCount.tails,
      },
    }));
  }

  render() {
    const { face, flipCount, faceCount } = this.state;
    return (
      <div className="CoinFlip">
        <h1 className="CoinFlip-h1">Let's flip a coin!</h1>
        <Coin face={face} />
        <button onClick={this.handleClick}>Feeling Lucky?</button>
        <p>
          Out of {flipCount} flips, there have been {faceCount.heads} heads and{" "}
          {faceCount.tails} tails.
        </p>
      </div>
    );
  }
}
