import React from "react";

const Hero = () => {
  return (
    <div className="container py-6 h-screen w-screen ">
      <div className="h-full w-full flex flex-col justify-center items-center p-4 ">
        <img
          className="w-[210px] h-[210px] rounded-full mx-auto mb-6"
          src={"/images/me2.jpg"} 
          alt=""
        />
        <h1 className="text-[24px] sm:text-[30px] mb-4 inline-flex ">
          <div className="static-txt">Hi, I am </div>
          <ul className="dynamic-txts m-0 p-0">
            <li>
              <span>Web Developer</span>
            </li>
            <li className="">
              <span>Aung Zaw Phyo</span>
            </li>
          </ul>
        </h1>
        <div className="text-[24px] sm:text-[26px] text-center mb-3">
          I love to create websites and learn programming.
        </div>
      </div>
    </div>
  );
};

export default Hero;
