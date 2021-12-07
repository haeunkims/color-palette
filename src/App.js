import React, { Component } from "react";
import { Routes, Route } from "react-router";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";
// import { Switch } from "@mui/material";
class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/welcome" element={<h1>Main page</h1>} />
        <Route
          exact
          path="/palette/:id"
          element={<h1>Individual palletes</h1>}
        />
      </Routes>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
