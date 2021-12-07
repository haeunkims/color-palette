import React, { Component } from "react";
import { Routes, Route } from "react-router";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";
// import { Switch } from "@mui/material";
class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id == id;
    });
  }
  render() {
    return (
      <Routes>
        <Route path="/welcome" element={<h1>MainPage </h1>} />
        {/*need help change to JSX */}
        <Route
          // exact
          path="/palette/:id"
          element={
            <Palette
              />}
          
        />
      </Routes>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
