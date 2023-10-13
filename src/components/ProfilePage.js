import React, { useState } from "react";
import fashion from "./fashion.jpeg";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

const ProfilePage = () => {
  const [value, setValue] = useState("4");
  return (
    <div className="profile">
      <div className="left">
        <div>
          <img src={fashion} alt="fashion" />
        </div>
        <h4>MetaMask</h4>
        <p>@metaMask</p>
        <div>
          <p>MetaMask brings Ethereum to </p>
          <p>your web browser</p>
        </div>
        <div className="icons">
          <FiGithub className="icon" size={45} />
          <CiLinkedin className="icon" size={45} />
          <FiGithub className="icon" size={45} />
          <CiLinkedin className="icon" size={45} />
        </div>
      </div>
      <div className="right">
        <div className="top">
          <p>6/8 Organizations</p>
          <div className="range">
            <div className="range-child">.</div>
          </div>
        </div>
        <div className="followers">
          <b>{value}K</b> <spam>Followers</spam> <br />
          <button
            onClick={() => {
              setValue(parseInt(value) + 1);
            }}
          >
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
