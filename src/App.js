import React, { Component } from "react";
import "./styles.css";

import Languages from "./components/Languages";
import FrontEnd from "./components/FrontEnd";
import BackEnd from "./components/BackEnd";
import Tools from "./components/Tools";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  manageIndex = e => {
    const { value } = e.target;
    this.setState({
      currentPage: value
    });
  };

  render() {
    const { currentPage } = this.state;
    return (
      <div className="progress_wrap">
        {currentPage === 1 ? <Languages /> : null}
        {currentPage === 2 ? <FrontEnd /> : null}
        {currentPage === 3 ? <BackEnd /> : null}
        {currentPage === 4 ? <Tools /> : null}
        <ul className="pagination">
          <li value={1} onClick={this.manageIndex}>
            Languages
          </li>
          <li value={2} onClick={this.manageIndex}>
            FrontEnd
          </li>
          <li value={3} onClick={this.manageIndex}>
            BackEnd
          </li>
          <li value={4} onClick={this.manageIndex}>
            Tools
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
