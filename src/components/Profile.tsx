import React from "react";
import "./Profile.css";

interface ProfileProps {
  imageUrl: string;
  bio: string;
}

const Profile: React.FC<ProfileProps> = ({ imageUrl, bio }) => {
  return (
    <div className="container1">
      <img src={imageUrl} alt="Profile" className="img" />
      <p className="text">{bio}</p>
    </div>
  );
};

export default Profile;
