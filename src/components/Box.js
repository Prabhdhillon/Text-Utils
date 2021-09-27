import React, { useState } from "react";

export default function Box(props) {
  const [text, setText] = useState("Enter text here");
  const changeUpcase = () => {
    let text2 = text.toUpperCase();
    setText(text2);
    props.showAlert("Converted to upper case", "Success");
  };
  const changeLowcase = () => {
    let text2 = text.toLowerCase();
    setText(text2);
    props.showAlert("Converted to Lowercase", "Success");
  };
  const clear = () => {
    setText("");
    props.showAlert("Text cleared", "Success");
  };
  const textareaStyle = {
    backgroundColor: "white",
  };

  // const myStyle = {
  //   backgroundColor: "red",
  // };
  return (
    <div>
      <div className="container my-4">
        <div className="mb-3">
          <h3>Enter Your Text Here</h3>
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            className="form-control"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            style={textareaStyle}
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
        <div className="mb-5">
          <h4>Your text summary</h4>
          <p>
            <b>{text.split(" ").length}</b> words and <b>{text.length}</b>{" "}
            characters
          </p>
        </div>

        <button className="btn btn-primary" onClick={changeUpcase}>
          UpperCase
        </button>
        <button className="btn btn-primary ms-3" onClick={changeLowcase}>
          LowerCase
        </button>
        <button className="btn btn-primary ms-3" onClick={clear}>
          Clear
        </button>
      </div>
    </div>
  );
}
