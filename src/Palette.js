import React, { useState, useEffect } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";
import "./Palette.css";

const Palette = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = { level: 500, format: "hex" };
  //   this.changeLevel = this.changeLevel.bind(this);
  //   this.changeFormat = this.changeFormat.bind(this);
  // }

  const [level, setLevel] = useState(500)
  const [format, setFormat] = useState("hex")
  const { id } = useParams()
  // useEffect(() => {

  // })
  
  const findPalette = () => {
    return seedColors.find(function (palette) {
      return palette.id == id;
    });
  }
  const { colors, paletteName, emoji } = generatePalette(findPalette());
  const colorBoxes = colors[level].map((color) => (
    <ColorBox background={color[format]} name={color.name} key={color.id} />
  ));
  const changeLevel = (level) => {
    setLevel(level)
  }
  const changeFormat = (val) => {
    setFormat(val)
  }
  // const render() {
    // const { level, format } = this.state;
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={changeLevel}
          handleChange={changeFormat}
        />

        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
export default Palette;
