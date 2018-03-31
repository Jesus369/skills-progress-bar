import React, { Component } from "react";

class Databases extends Component {
  render() {
    return (
      <div>
        <div className="bar_wrap">
          <label>PostgreSQL</label>
          <div className="bar">
            <div className="inner_bar postgresql-70" data-percent="70%" />
          </div>
        </div>
        <div className="bar_wrap">
          <label>MongoDB</label>
          <div className="bar">
            <div className="inner_bar mongo-60" data-percent="60%" />
          </div>
        </div>
      </div>
    );
  }
}

export default Databases;
