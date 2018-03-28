import React, { Component } from "react";

class BackEnd extends Component {
  render() {
    const { backend } = this.props;
    return (
      <div className={`${!backend ? "initialLoad" : "afterLoad"}`}>
        <div className="bar_wrap">
          <label>React</label>
          <div className="bar">
            <div className="inner_bar html-80" data-percent="80%" />
          </div>
        </div>
        <div className="bar_wrap">
          <label>Graphql</label>
          <div className="bar">
            <div className="inner_bar html-80" data-percent="80%" />
          </div>
        </div>
        <div className="bar_wrap">
          <label>Apollo</label>
          <div className="bar">
            <div className="inner_bar html-80" data-percent="80%" />
          </div>
        </div>
      </div>
    );
  }
}

export default BackEnd;
