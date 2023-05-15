import React from "react";
import Navbar from "./Navbar";

const FeedPage = () => {
  return (
    <div className="feed-page">
      <Navbar />
      <div className="feed-container">
        <div className="left-sidebar">User Profile and Description</div>
        <div className="feed-content">
          <div className="user-post">
            {/* User posts */}
            {/* Like, Comment, Share functionality */}
          </div>
        </div>
        <div className="right-sidebar">
          <div className="card">
            {/* Card content */}
            {/* Show more/less functionality */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
