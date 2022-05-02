import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether Dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [colour, setColour] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  const colourPallete = (colour) => {
    setColour(colour);
    document.body.style.backgroundColor = colour;
    showAlert("Colour has changed", "success");
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About "
          mode={mode}
          toggleMode={toggleMode}
          colourPallete={colourPallete}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>

            <Route exact path="/">
              <TextForm
                heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces"
                mode={mode}
                showAlert={showAlert}
                colourPallete={colourPallete}
                colour={colour}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
