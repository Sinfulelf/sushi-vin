import React from "react";

export default class Main extends React.PureComponent {
  state = {
    buttonClicked: false,
  };

  onAnswerClick = () => {
    this.setState({ buttonClicked: true });
    
  };

  render() {
    const { buttonClicked } = this.state;
    return (
      <div>
        {buttonClicked ? (
          <h1>You are Gha!</h1>
        ) : (
          <>
            <h1>Why are you gha?</h1>
            <button onClick={this.onAnswerClick}>get answer</button>
          </>
        )}
      </div>
    );
  }
}
