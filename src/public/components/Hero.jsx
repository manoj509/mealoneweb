


import React, { useState, useEffect } from "react";
import foodImage1 from "../assets/tiffin.png";
import foodImage2 from "../assets/plate.png";
import foodImage3 from "../assets/thali.webp";

import iosStore from "../assets/iOS-Store.png";
import playStore from "../assets/Google-playstore.png";
const images = [foodImage1, foodImage2, foodImage3];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);



  return (
    <div style={{ backgroundColor : "#F5F5DC" }}>

    <section  className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 md:py-16 mx-10 mt-20">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          <span className="text-gray-800 text-2xl md:text-4xl block animate-fadeIn">
            #1 ONLINE TIFFIN SERVICE
          </span>
          <div className="mt-3 md:mt-5 text-5xl md:text-7xl">
            <span className="text-green-600 block animate-bounce">
              Delicious Food
            </span>
            <span className="text-black mt-2 md:mt-4 block animate-slideUp">
              Waiting For You
            </span>
          </div>
        </h1>
        <p className="text-gray-600 text-sm md:text-lg mx-4 md:mx-0 animate-fadeIn">
          Food That Feels Like Family. Fresh, Healthy & Homemade Meals Delivered
          to Your Doorstep.
        </p>
       <div>
       
         {/* <div className="flex justify-center gap-6 py-6">
         <h1  className="font-bold text-black py-3 md:py-4 ">
          Download Now
        </h1>
                <img src={iosStore} alt="Download on App Store" className="h-14 hover:scale-105 transition-transform duration-300 shadow-lg" />
                <img src={playStore} alt="Get it on Google Play" className="h-14 hover:scale-105 transition-transform duration-300 shadow-lg" />
              </div> */}
       </div>
      </div>

      {/* Right Side - Image with Auto Change */}
      <div
        style={{ height: "500px" }}
        className="md:w-1/2 flex justify-center md:justify-end relative"
      >
        <img
          src={images[currentImage]}
          alt="Food"
          className="w-2/3 md:w-3/5 h-2/9 md:max-w-md rounded-lg hover:scale-105 transition-opacity duration-700 opacity-100"
        />
      </div>

      {/* Floating Bubbles */}
     
    </section>
    </div>
  );
};

export default Hero;







