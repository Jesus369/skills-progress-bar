import React, { Component } from "react";

class Languages extends Component {
  render() {
    return (
      <div>
        <div className="bar_wrap">
          <label>HTML</label>
          <div className="bar">
            <div className="inner_bar html-90" data-percent="90%" />
          </div>
        </div>
        <div className="bar_wrap">
          <label>Javascript</label>
          <div className="bar">
            <div className="inner_bar js-80" data-percent="80%" />
          </div>
        </div>
        <div className="bar_wrap">
          <label>CSS</label>
          <div className="bar">
            <div className="inner_bar css-70" data-percent="70%" />
          </div>
        </div>
        <div className="bar_wrap">
          <label>Python</label>
          <div className="bar">
            <div className="inner_bar python-40" data-percent="40%" />
          </div>
        </div>
      </div>
    );
  }
}

export default Languages;
