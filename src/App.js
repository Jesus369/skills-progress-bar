import React, { Component } from "react";
import "./styles.css";

import FrontEnd from "./components/FrontEnd";
import BackEnd from "./components/BackEnd";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frontend: false,
      backend: false
    };
  }

  manage_frontend_pag = () => {
    this.setState({
      frontend: !this.state.frontend,
      backend: !this.state.backend
    });
  };

  manage_backend_pag = () => {
    this.setState({
      frontend: !this.state.frontend,
      backend: !this.state.backend
    });
  };

  render() {
    const { frontend, backend } = this.state;
    return (
      <div className="progress_wrap">
        <FrontEnd frontend={frontend} />
        <BackEnd backend={backend} />
        <ul className="pagination">
          <li onClick={this.manage_frontend_pag}>1</li>
          <li onClick={this.manage_backend_pag}>2</li>
        </ul>
      </div>
    );
  }
}

export default App;
