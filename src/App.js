import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="html_wrap">
          <label>HTML</label>
          <div className="bar">
            <div className="inner_bar" data-percent="80%" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
