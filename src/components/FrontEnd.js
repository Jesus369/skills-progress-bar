import React, { Component } from "react";

class FrontEnd extends Component {
  render() {
    const { frontend } = this.props;
    return (
      <div className={`${frontend ? "initialLoad" : "afterLoad"}`}>
        <div className="bar_wrap">
          <label>HTML</label>
          <div className="bar">
            <div className="inner_bar html-80" data-percent="80%" />
          </div>
        </div>
        <div className="bar_wrap">
          <label>CSS</label>
          <div className="bar">
            <div className="inner_bar html-80" data-percent="80%" />
          </div>
        </div>
        <div className="bar_wrap">
          <label>Javascript</label>
          <div className="bar">
            <div className="inner_bar html-80" data-percent="80%" />
          </div>
        </div>
      </div>
    );
  }
}

export default FrontEnd;
