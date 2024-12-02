// ChatFeed.js
import React from "react";
import "./ChatFeed.css";

const ChatFeed = () => {
  return (
    <div className="chat-feed-container">
      <div className="chat-feed-header">
        <span className="chat-feed-title">Chat Feed</span>
      
      </div>
      <div className="chat-feed-messages">
        {/* Example messages */}
        <div className="chat-feed-message">
          <span className="chat-feed-message-user">Rachel Adams:</span>
          <div className="chat-feed-message-content">
            Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam.
          </div>
        </div>
        <div className="chat-feed-message">
          <span className="chat-feed-message-user">Hannibal Smith:</span>
          <div className="chat-feed-message-content">
            Egestas mattis pellentesque nibh duis id malesuada.
          </div>
        </div>
      </div>
      <div className="chat-feed-footer">
        <input
          type="text"
          placeholder="Type a message..."
          className="chat-feed-input"
        />
        <button className="chat-feed-send-button">Send</button>
      </div>
    </div>
  );
};

export default ChatFeed;
