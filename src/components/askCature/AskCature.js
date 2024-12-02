// AskCature.js
import React from "react";
import "./AskCature.css";

const AskCature = () => {
  return (
    <div className="ask-cature-container">
      <h3 className="ask-cature-title">Ask Cature</h3>
      <div className="ask-cature-options">
        <button className="ask-cature-button">WhatsApp</button>
        <button className="ask-cature-button">Greetings</button>
      </div>
      <div className="ask-cature-templates">
        <h4 className="ask-cature-subtitle">Greeting Template</h4>
        <div className="ask-cature-buttons">
          <button className="ask-cature-secondary">Copy to Send</button>
          <button className="ask-cature-secondary">Preview</button>
        </div>
      </div>
    </div>
  );
};

export default AskCature;
