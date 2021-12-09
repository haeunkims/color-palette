import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelper";
import PaletteList from "./PaletteList";
class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          path="/palette/:paletteId/:colorId"
          render={() => <h1>single color page</h1>}
        />
      </Switch>
      //   <Route
      //     exact
      //     path="/palette/:id"
      //     render={(routeProps) => (
      //       <Palette
      //         palette={generatePalette(
      //           this.findPalette(routeProps.match.params.id)
      //         )}
      //       />
      //     )}
      //   />
      // </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
