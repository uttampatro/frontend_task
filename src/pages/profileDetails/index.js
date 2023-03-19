import React, { useEffect, useState } from "react";
import { fetchUser } from "../../services";
import { useParams } from "react-router-dom";
import "./style.css";
import UserData from "./component/UserData";
import SideBar from "./component/SideBar";
import Chat from "./component/Chat";
import AllChats from "./component/AllChats";

function ProfileDetails() {
  const [activeTab, setActiveTab] = useState("profile");

  const [user, setUser] = useState({});
  const { id } = useParams();

  const getUser = async () => {
    try {
      const data = await fetchUser();
      const foundUser = data.users.find((u) => u.id === Number(id));
      setUser(foundUser);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="profileContainer">
      <SideBar setActiveTab={setActiveTab} activeTab={activeTab} />
      {activeTab === "profile" && <UserData user={user} />}
      {activeTab === "posts" && (
        <div className="profileDetailsBody">
          <div className="profileDetailsHeader">
            <h3>Posts</h3>
            <div className="profileLogout">
              <img className="image" src={user.profilepicture} />
              <p>{user.name}</p>
            </div>
          </div>
        </div>
      )}
      {activeTab === "gallery" && (
        <div className="profileDetailsBody">
          <div className="profileDetailsHeader">
            <h3>Gallery</h3>
            <div className="profileLogout">
              <img className="image" src={user.profilepicture} />
              <p>{user.name}</p>
            </div>
          </div>
        </div>
      )}
      {activeTab === "todo" && (
        <div className="profileDetailsBody">
          <div className="profileDetailsHeader">
            <h3>ToDo</h3>
            <div className="profileLogout">
              <img className="image" src={user.profilepicture} />
              <p>{user.name}</p>
            </div>
          </div>
        </div>
      )}
      <div className="chatFooter">
        <AllChats user={user} />
      </div>
    </div>
  );
}

export default ProfileDetails;
