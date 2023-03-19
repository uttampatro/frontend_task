import React, { useEffect, useState } from "react";
import { fetchAllUser } from "../../../../services";
import Chat from "../Chat";
import "./AllChat.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function AllChats({ user }) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatToggle = () => {
    setIsChatOpen((prevState) => !prevState);
  };

  const [users, setUsers] = useState([]);

  const getAllUser = async () => {
    try {
      const data = await fetchAllUser();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleChatOpenToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div className="allChat" onClick={handleChatToggle}>
        <p>Chats</p>
        <KeyboardArrowUpIcon
        style={{
            cursor: "pointer",
            height: "20px",
            paddingTop: "2px",
            color: "white",
            paddingLeft: "150px",
          }} />
      </div>
      <div className={`${isChatOpen ? "allChatShow" : ""}`}>
        <div className="allChat-header" onClick={handleChatToggle}>
          <p>Chats</p>
          <KeyboardArrowDownIcon
            style={{
              cursor: "pointer",
              height: "20px",
              paddingTop: "2px",
              color: "white",
              paddingLeft: "150px",
            }}
          />
        </div>
        <div
          style={{
            overflow: "auto",
            cursor: "pointer",
          }}
        >
          {users.map((user) => {
            return (
              <div onClick={handleChatOpenToggle} className="allChat_Body">
                <div className="allChat_Body1">
                  <img className="image" src={user.profilepicture} />
                  <p>{user.name}</p>
                </div>

                <div>
                  <div className="green-dot"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Chat user={user} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default AllChats;
