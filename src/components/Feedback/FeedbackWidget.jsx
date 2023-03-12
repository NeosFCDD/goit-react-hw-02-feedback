import React, {Component} from "react";


export default class FeedbackWidget extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    
    handleIncrement = e=> {
        const target = e.target.value;
        this.setState (prevState => {
            return {
                [target]: prevState[target]+1};
        });
    };

    render() {
      return (
        <div className = "wrapper">
          <div>
            <h2>Please leave feedback</h2>
            <div>
                <button type="button" onClick={this.handleIncrement}>Good</button>
                <button type="button" onClick={this.handleIncrement}>Neutral</button>
                <button type="button" onClick={this.handleIncrement}>Bad</button>
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
