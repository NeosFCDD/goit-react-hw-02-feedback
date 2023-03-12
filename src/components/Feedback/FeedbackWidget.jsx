import React, {Component} from "react";


export default class FeedbackWidget extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  
    render() {
      return (
        <div className = "wrapper">
          <div>
            <h2>Please leave feedback</h2>
            <div>
                <button>Good</button>
                <button>Neutral</button>
                <button>Bad</button>
            </div>
          </div>

          <div>
            <h2>Statistics</h2>
            <div>
                <span>Good: {this.state.good}</span>
                <span>Neutral: {this.state.neutral}</span>
                <span>Bad: {this.state.bad}</span>
            </div>

          </div>
        </div>
      );
    }
}
