import React from "react";

function SideBar({ activeTab, setActiveTab }) {
  const handleProfileClick = () => setActiveTab("profile");
  const handlePostsClick = () => setActiveTab("posts");
  const handleGalleryClick = () => setActiveTab("gallery");
  const handleToDoClick = () => setActiveTab("todo");

  return (
    <div>
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
    </div>
  );
}

export default SideBar;
