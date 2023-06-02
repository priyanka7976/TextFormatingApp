import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// let name = "priyanka";
function App() {
  const [mode, setMode] = useState("light");

  const [butbox, setButBox] = useState("Enable dark mode");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setButBox("Enable light mode");
      document.body.style.backgroundColor = "gray";
      document.title = "Dark Mode";
    } else {
      setMode("light");
      setButBox("Enable dark mode");
      document.body.style.backgroundColor = "white";
      document.title = "Light Mode";
    }
    setInterval(() => {
      document.title = "TextManipulation App";
    }, 2000);
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} butbox={butbox} />
        <div className="container my-3">
          <switch>
            <Route exact path="/">
              <Textform heading="Text Area" mode={mode} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </switch>
        </div>
      </Router>

      {/* <Navbar title={67} aboutText="contact  us" />; */}
      {/* <Navbar aboutText="contact us" />; */}
      {/* <Navbar title="projects" aboutText="contact us" />; */}
    </>
  );
}

export default App;
