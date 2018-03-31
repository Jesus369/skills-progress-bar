import React, { Component } from "react";

import Databases from "./Databases";
import Languages from "./Languages";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Tools from "./Tools";

import "./styles/styles.css";

class GroupSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedSkill: 1
    };
  }

  manageIndex = e => {
    const { name } = e.target;
    this.setState({
      displayedSkill: parseInt(name)
    });
  };
  render() {
    const { displayedSkill } = this.state;
    return (
      <div className="skills_component">
        <div className="progress_wrap">
          {displayedSkill === 1 ? <Languages /> : null}
          {displayedSkill === 2 ? <FrontEnd /> : null}
          {displayedSkill === 3 ? <BackEnd /> : null}
          {displayedSkill === 4 ? <Tools /> : null}
          {displayedSkill === 5 ? <Databases /> : null}
          <div className="pagination">
            <button className="page" name="1" onClick={this.manageIndex}>
              Languages
            </button>
            <button className="page" name="2" onClick={this.manageIndex}>
              FrontEnd
            </button>
            <button className="page" name="3" onClick={this.manageIndex}>
              BackEnd
            </button>
            <button className="page" name="4" onClick={this.manageIndex}>
              Tools
            </button>
            <button className="page" name="5" onClick={this.manageIndex}>
              Databases
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default GroupSkills;
