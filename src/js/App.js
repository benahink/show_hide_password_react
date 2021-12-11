import React, { useState } from "react";
import "../css/styles.css";

function App() {
  const [inputType, setInputType] = useState("password");
  const [icon, setIcon] = useState("");
  const [overlay, setOverlay] = useState("");

  function handleClick() {
    if (inputType === "password") {
      //   switch to text
      setInputType("text");

      //   change icon
      setIcon("bx-show");

      // toggle overlay
      setOverlay("overlay-content");
    } else {
      //   switch to password
      setInputType("password");

      //   change icon
      setIcon("");

      // toggle overlay
      setOverlay("");
    }
  }

  return (
    <div className="input">
      <div className={`input__overlay ${overlay}`} id="input-overlay"></div>

      <i className="bx bx-lock-alt input__lock"></i>
      <input
        type={inputType}
        placeholder="Password..."
        className="input__password"
        id="input-pass"
      />
      <i
        className={`bx bx-hide input__icon ${icon}`}
        id="input-icon"
        onClick={handleClick}
      ></i>
    </div>
  );
}

export default App;
