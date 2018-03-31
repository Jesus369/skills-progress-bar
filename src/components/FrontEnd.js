import React, { Component } from "react";

class FrontEnd extends Component {
  render() {
    return (
      <div>
        <div className="bar_wrap">
          <label>React</label>
          <div className="bar">
            <div className="inner_bar react-80" data-percent="80%" />
          </div>
        </div>
        <div className="bar_wrap">
          <label>GraphQL</label>
          <div className="bar">
            <div className="inner_bar graphql-75" data-percent="75%" />
          </div>
        </div>
        <div className="bar_wrap">
          <label>Redux</label>
          <div className="bar">
            <div className="inner_bar redux-50" data-percent="50%" />
          </div>
        </div>
      </div>
    );
  }
}

export default FrontEnd;
