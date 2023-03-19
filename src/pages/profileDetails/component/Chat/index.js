import React, { useState } from "react";
import "./Chat.css";
import CloseIcon from "@mui/icons-material/Close";

function Chat({ user, isOpen, setIsOpen }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, message]);
    setMessage("");
  };

  return (
    <div>
      <div className={`${isOpen ? "show" : ""}`}>
        <div className="chat-header">
          <img className="image" src={user.profilepicture} />
          <p>{user.name}</p>
          <div onClick={() => setIsOpen(false)}>
            <CloseIcon
              style={{
                cursor: "pointer",
                height: "20px",
                paddingTop: "5px",
                color: "white",
                paddingLeft: "30px",
              }}
            />
          </div>
        </div>
        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className="chat-message">
              {msg}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="chat-form">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
