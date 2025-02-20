import React from "react";
import logo from "../assets/logo.png";
import "../components/css/animation.css"; // Import the CSS file

const Animation = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 overflow-hidden">
      <img src={logo} alt="Logo" className="logo-animation w-60 h-60" />
    </div>
  );
};

export default Animation;
