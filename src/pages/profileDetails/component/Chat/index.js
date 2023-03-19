import React, { useEffect, useState } from "react";
import "./Chat.css";
import CloseIcon from "@mui/icons-material/Close";
import { fetchUser } from "../../../../services";

function Chat({ selectedUserId, setSelectedUserId, isOpen, setIsOpen }) {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, message]);
    setMessage("");
  };

  const getUser = async () => {
    try {
      const data = await fetchUser();
      console.log(selectedUserId);
      const foundUser = data.users.find((u) => u.id === selectedUserId);
      setUser(foundUser);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleChatOpenToggle = () => {
    setIsOpen(false);
    setSelectedUserId(null);
  };
  return (
    <div>
      <div className={`${isOpen ? "show" : ""}`}>
        <div className="chat-header">
          <img className="image" src={user.profilepicture} />
          <p>{user.name}</p>
          <div onClick={() => handleChatOpenToggle()}>
            <CloseIcon
              style={{
                cursor: "pointer",
                height: "20px",
                paddingTop: "5px",
                color: "white",
                paddingLeft: "60px",
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
