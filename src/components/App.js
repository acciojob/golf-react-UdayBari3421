import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" },
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  buttonClickHandler() {
    this.setState({ renderBall: true });
  }
  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  // bind ArrowRight keydown event
  componentDidMount() {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 39) {
        this.setState({
          renderBall: true,
          ballPosition: { left: `${this.state.posi + 5}px` },
        });
        this.setState({ posi: this.state.posi + 5 });
      }

      if (event.keyCode === 37) {
        this.setState({
          renderBall: true,
          ballPosition: { left: `${this.state.posi - 5}px` },
        });
        this.setState({ posi: this.state.posi - 5 });
      }
    });
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
