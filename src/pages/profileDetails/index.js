import React, { useEffect, useState } from "react";
import { fetchAllUser, fetchUser } from "../../services";
import { useParams, Link } from "react-router-dom";
import "./style.css";
import UserData from "./component/UserData";
import SideBar from "./component/SideBar";
import AllChats from "./component/AllChats";

function ProfileDetails() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isOpen, setIsOpen] = useState(false);

  const handleChatToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

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

  const [users, setUsers] = useState([]);

  const getAllUser = async () => {
    try {
      const data = await fetchAllUser();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getRandomSubset = (arr, count) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomSubset = getRandomSubset(users, 2);

  useEffect(() => {
    getUser();
    getAllUser();
  }, []);

  return (
    <div className="profileContainer">
      <SideBar setActiveTab={setActiveTab} activeTab={activeTab} />
      {activeTab === "profile" && (
        <UserData user={user} handleChatToggle={handleChatToggle} />
      )}
      {activeTab === "posts" && (
        <div className="profileDetailsBody">
          <div className="profileDetailsHeader">
            <h3>Posts</h3>
            <div onClick={handleChatToggle} className="profileLogout">
              <img className="image" src={user.profilepicture} />
              <p>{user.name}</p>
            </div>
          </div>
        </div>
      )}
      {activeTab === "gallery" && (
        <div className="profileDetailsBody">
          <div onClick={handleChatToggle} className="profileDetailsHeader">
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
          <div onClick={handleChatToggle} className="profileDetailsHeader">
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
      <div>
        <div className={`${isOpen ? "modelShow" : "modelShow1"}`}>
          <div className="modelBody">
            <img className="modelShowImage" src={user.profilepicture} />
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
          <div className="modeBoxBody">
            {randomSubset.map((user) => {
              return (
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  to={`/profileDetails/${user?.id}`}
                  onClick={window.location.reload}
                >
                  <div className="body">
                    <img className="image" src={user.profilepicture} />
                    <p>{user.name}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={`/`}
          >
            <div className="button">
              <button>Sign Out</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
