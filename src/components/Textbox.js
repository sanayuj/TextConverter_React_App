import React, { useState } from "react";

export default function Textbox(props) {
  const [text, setText] = useState("");

  const handleUpperClick = () => {
    const UpperCase = text.toUpperCase();
    setText(UpperCase);
    console.log("OnClicked Worked" + text);
  };

  const handleLower = () => {
    const lowerCaseLetters = text.toLowerCase();
    setText(lowerCaseLetters);
  };

  const handleChange = (event) => {
    setText(event.target.value);
    console.log("on Change is worked " + text);
  };

  return (
    <>
      <div className="mb-3 my-5">
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handleChange}
          rows="3"
        ></textarea>
        <div className="my-2 ">
          <button onClick={handleUpperClick} className="btn btn-primary mx-2">
            Convert to Uppercase
          </button>
          <button onClick={handleLower} className="btn btn-primary mx-2">
            Convert to Lowercase
          </button>
        </div>
        <h4>Summary</h4>
        <p>
          Entered details consist of {text.length} characters and{" "}
          {text.split(" ").length-1} words.
        </p>
        <p>
          You can read this all details in {0.008 * text.split(" ").length-0.008}{" "}
          minute per word.
        </p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
