import React, {Component} from "react";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  onLeaveFeedback = (e) => {
      const target = e.target.name;
      this.setState ((prevState) => {
          return { [target]: prevState[target] + 1 };
      });
  };

  countTotalFeedback = ( ) => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = ( ) => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(1);
  };

  render() {
    return (
      <div className = "wrapper">
        <div>
          <h2>Please leave feedback</h2>
          <div>
              <button type="button"  onClick={this.onLeaveFeedback}>Good</button>
              <button type="button"  onClick={this.onLeaveFeedback}>Neutral</button>
              <button type="button" onClick={this.onLeaveFeedback}>Bad</button>
          </div>
        </div>

        <div>
          <h2>Statistics</h2>
          <ul>
              <li>Good: {this.state.good}</li>
              <li>Neutral: {this.state.neutral}</li>
              <li>Bad: {this.state.bad}</li>
          </ul>

        </div>
      </div>
    );
  }
}

export default App;