import { useState } from "react";
import "./App.css";
import ColorScheme from "./component/ColorScheme";
import Nav from "./component/Nav";

function App() {
  // initial state, render some initial colors // same colors as Figma
  const [colorAPI, setColorAPI] = useState({
    seedColor: "#F55A5A",
    color: ["#2B283A", "#FBF3AB", "#AAD1B6", "#A626D3"],
    mode: "monochrome-dark",
  });

  //get "color" and "mode", fetch API and Render in the website.
  function getColor() {
    //user input
    const userColorEl = document.getElementById("color-el").value.slice(1);
    const userModeEl = document.getElementById("select-El").value;

    //fetch according to user input
    fetch(
      `https://www.thecolorapi.com/scheme?hex=${userColorEl}&mode=${userModeEl}&count=4`
    )
      .then((res) => res.json())
      .then((data) => {
        // get data, put in variable that match with initial state
        const newSeedColor = data.seed.hex.value;
        const newColors = data.colors.map((elem) => {
          return elem.hex.value;
        });

        //set initial state to new State.
        setColorAPI({
          seedColor: newSeedColor,
          color: newColors,
          mode: "monochrome-dark",
        });
      });
  }

  //map through useState variable to return 4 new instances
  // of "ColorScheme" component.
  // I setup to fetch only 4 colors.
  const RenderColors = colorAPI.color.map((elem) => {
    return <ColorScheme key={elem} seedColor={`${elem}`} />;
  });

  return (
    <div className="App">
      <Nav getColor={getColor} />
      <div className="col-color-container">
        {/* render Seed color "user input" */}
        <ColorScheme key={colorAPI.seedColor} seedColor={colorAPI.seedColor} />
        {/* render 4 colors from API */}
        {RenderColors}
      </div>
    </div>
  );
}

export default App;
