import React, { Component } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">ReactColorPicker</a>
        </div>
        <div className="slider-container">
          <span>Level:{level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              onAfterChange={this.props.changeLevel}
              step={100}
              trackStyle={{ backgroundColor: "transparent" }}
              handleStyle={{
                borderColor: "green",
                height: 13,
                width: 13,
                marginLeft: -7,
                marginTop: -3,
                backgroundColor: "green",
                boxShadow: "none",
              }}
              railStyle={{ heigh: 8 }}
            />
          </div>
        </div>
      </header>
    );
  }
}
export default Navbar;
