import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { FaGithubSquare, FaFacebookSquare, FaAddressCard } from "react-icons/fa";

const About = () => {
  return (
    <div className="container py-12" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 h-full w-full ">
        <div className="p-4 flex justify-center items-center w-full ">
          <img
            className="rounded-2xl w-full sm:w-[300px] lg:w-[400px] h-auto "
            src={"/images/aungzawphyo.png"}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center w-full ">
          <h1 className="title mb-1">About Me</h1>
          <div className="p-4">
            <h1 className="text-[22px] sm:text-[24px] mb-1">
              My name is Aung Zaw Phyo.
            </h1>
            <p className="mb-3 md:text-[18px]">
              I am a passionate web developer with over two years of hands-on experience in JavaScript and PHP (Laravel). 
              My journey began at a local company where I honed my skills as a junior web developer for over a year. 
              During my tenure, I collaborated on various projects, learning the intricacies of web development and improving my coding proficiency.
              Currently, I am building innovative projects using the programming tools I have mastered, 
              continually practicing and learning to enhance my skills.
            </p>
            <div className="flex flex-col flex-wrap text-[18px] sm:text-[20px] mt-2">
              <a
                href="https://github.com/Aung-Zaw-Phyo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mr-4 mb-2 hover:text-[yellow] cursor-pointer duration-300"
              >
                <FaGithubSquare size={20} className="mr-2" /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/aung-zaw-phyo-a28779238/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mr-4 mb-2 hover:text-[yellow] cursor-pointer duration-300"
              >
                <AiFillLinkedin size={20} className="mr-2" /> LinkedIn
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100021514839008"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mr-4 mb-2 hover:text-[yellow] cursor-pointer duration-300"
              >
                <FaFacebookSquare size={20} className="mr-2" /> FaceBook
              </a>

              <a
                href="mailto:aungzawphyo1102@gmail.com mb-1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center flex-wrap mb-2 hover:text-[yellow] cursor-pointer duration-300"
              >
                <MdMarkEmailUnread size={20} className="mr-2" />{" "}
                aungzawphyo1102@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
