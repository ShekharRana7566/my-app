import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Text Area cleared", "success");
  };
  const handleCopy = () => {
    // let text = document.getElementById("Box");
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  return (
    <div className="mx-5">
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#03062e" : "white" }}
      >
        <h2>{props.heading}</h2>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor:
                props.mode === "light" ? "white" : "rgb(34 50 86)",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={handleOnChange}
            rows="8"
            id="Box"
          ></textarea>
        </div>

        <button disabled={text.length===0 } className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0 } className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0 } className="btn btn-primary mx-2 my-1" onClick={handleClear}>
          Clear Text
        </button>
        <button disabled={text.length===0 } className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0 } className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#03062e" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {" "}
          Time to read{" "}
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview!"}
        </p>
      </div>
    </div>
  );
}
