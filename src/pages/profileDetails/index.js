import React, { useEffect, useState } from "react";
import { fetchUser } from "../../services";
import { useParams } from "react-router-dom";

import "./style.css";

function ProfileDetails() {
  const [activeTab, setActiveTab] = useState("profile");

  // define functions to handle tab clicks
  const handleProfileClick = () => setActiveTab("profile");
  const handlePostsClick = () => setActiveTab("posts");
  const handleGalleryClick = () => setActiveTab("gallery");
  const handleToDoClick = () => setActiveTab("todo");

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
      <div className="profileBox">
        <div
          onClick={handleProfileClick}
          className={`profileBody ${
            activeTab === "profile" ? "active" : "inactive"
          }`}
        >
          <p>Profile</p>
        </div>
        <div
          onClick={handlePostsClick}
          className={`profileBody ${
            activeTab === "posts" ? "active" : "inactive"
          }`}
        >
          <p>Posts</p>
        </div>
        <div
          onClick={handleGalleryClick}
          className={`profileBody ${
            activeTab === "gallery" ? "active" : "inactive"
          }`}
        >
          <p>Gallery</p>
        </div>
        <div
          onClick={handleToDoClick}
          className={`profileBody ${
            activeTab === "todo" ? "active" : "inactive"
          }`}
        >
          <p>ToDo</p>
        </div>
      </div>
      {activeTab === "profile" && (
        <div className="profileDetailsBody">
          <div className="profileDetailsHeader">
            <h3>Profile</h3>
            <div className="profileLogout">
              <img className="image" src={user.profilepicture} />
              <p>{user.name}</p>
            </div>
          </div>
          <div className="details">
            <div className="detailsPart1">
              <div style={{ justifyContent: "center" }}>
                <img className="bigImage" src={user.profilepicture} />
                <h3>{user.name}</h3>
              </div>
              <div className="userDetails">
                <h4>
                  Username : <span>{user.username}</span>
                </h4>
                <h4>
                  e-mail : <span>{user.email}</span>
                </h4>
                <h4>
                  Phone : <span>{user.phone}</span>
                </h4>
                <h4>
                  Website : <span>{user.website}</span>
                </h4>
              </div>
              <div className="userCompany">
                {/* <h5>Company</h5> */}
                <h4>
                  Name : <span>{user.company?.name}</span>
                </h4>
                <h4>
                  catchphrase : <span>{user.company?.catchPhrase}</span>
                </h4>
                <h4>
                  bs : <span>{user.company?.bs}</span>
                </h4>
              </div>
            </div>
            <div className="detailsPart2">
              <div className="userCompany">
                {/* <h5>Company</h5> */}
                <h4>
                  Street : <span>{user.address?.street}</span>
                </h4>
                <h4>
                  Suite : <span>{user.address?.suite}</span>
                </h4>
                <h4>
                  City : <span>{user.address?.city}</span>
                </h4>
                <h4>
                  Zipcode : <span>{user.address?.zipcode}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      )}
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
    </div>
  );
}

export default ProfileDetails;
