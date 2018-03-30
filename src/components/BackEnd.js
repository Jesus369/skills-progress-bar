import React, { Component } from "react";

class BackEnd extends Component {
  render() {
    return (
      <div>
        <div className="bar_wrap">
          <label>Express</label>
          <div className="bar">
            <div className="inner_bar express-80" data-percent="80%" />
          </div>
          <label>Apollo</label>
          <div className="bar">
            <div className="inner_bar apollo-75" data-percent="75%" />
          </div>
          <label>Django</label>
          <div className="bar">
            <div className="inner_bar django-10" data-percent="10%" />
          </div>
        </div>
      </div>
    );
  }
}

export default BackEnd;
