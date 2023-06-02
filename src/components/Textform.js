// import React from "react";
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  const [text, setText] = useState("Enter your text");

  const handleOnChange = (event) => {
    console.log("handle on change");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    console.log("Upper case button is clicked");
    // setText("You have an Upper case button is clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    console.log("Lower case button is clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <h2 className="my-3">{props.heading}</h2>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "grey" : "white ",
            }}
          ></textarea>
          <button
            type="button"
            className="btn btn-primary my-3"
            onClick={handleUpClick}
          >
            Convert into Upper case
          </button>
          <button
            type="button"
            className="btn btn-primary my-3 mx-3"
            onClick={handleLowClick}
          >
            Convert into lower case
          </button>

          <button
            type="button"
            className="btn btn-primary my-3"
            onClick={handleClearClick}
          >
            Clear text
          </button>
        </div>

        <div className="container my-3">
          <h2>Summary of your text</h2>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length}</p>
        </div>
      </div>
    </>
  );
}
