import React, { Component } from "react";

class Tools extends Component {
  render() {
    return (
      <div>
        <label>AWS S3</label>
        <div className="bar">
          <div className="inner_bar react-80" data-percent="80%" />
        </div>
        <label>Heroku</label>
        <div className="bar">
          <div className="inner_bar react-80" data-percent="80%" />
        </div>
        <label>Github</label>
        <div className="bar">
          <div className="inner_bar react-80" data-percent="80%" />
        </div>
      </div>
    );
  }
}

export default Tools;
