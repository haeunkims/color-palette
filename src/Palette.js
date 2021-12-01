import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            onAfterChange={this.changeLevel}
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
        {/* navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}
export default Palette;
