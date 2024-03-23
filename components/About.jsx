import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { FaGithubSquare, FaFacebookSquare } from "react-icons/fa";

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
          <h1 className="title mb-2">About Me</h1>
          <div className="p-4">
            <h1 className="text-[22px] sm:text-[24px] mb-1">
              My name is Aung Zaw Phyo.
            </h1>
            <p className="mb-2">
              I was born in Hmawbi. But currently I live in Hlaing Tharyar in
              Yangon. I finished high school in 2019. I started Learning web
              development with Javascript in 2021.
            </p>
            <p className="mb-2">
              I started to learn web development in 2021 with self-learning.
              After a few months, I became passionate about web development. So,
              I continued learning it. After over one year, I worked at a local
              company as a junior web developer. I have over two years of
              hands-on experiences with Javascript and PHP (Laravel). I am
              currently building some projects using programming tools which I
              have learned.
            </p>
            <div className="flex flex-wrap text-[18px] sm:text-[20px] mt-2">
              <a
                href="https://github.com/Aung-Zaw-Phyo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mr-4 mb-1 hover:text-[yellow] cursor-pointer duration-300"
              >
                <FaGithubSquare size={20} className="mr-2" /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/aung-zaw-phyo-a28779238/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mr-4 mb-1 hover:text-[yellow] cursor-pointer duration-300"
              >
                <AiFillLinkedin size={20} className="mr-2" /> LinkedIn
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100021514839008"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mr-4 mb-1 hover:text-[yellow] cursor-pointer duration-300"
              >
                <FaFacebookSquare size={20} className="mr-2" /> FaceBook
              </a>

              <a
                href="tel:09968548024"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mr-4 mb-1 hover:text-[yellow] cursor-pointer duration-300"
              >
                <AiFillPhone size={20} className="mr-2" /> (+95)9968548024
              </a>

              <a
                href="mailto:aungzawphyo1102@gmail.com mb-1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center flex-wrap mb-1 hover:text-[yellow] cursor-pointer duration-300"
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
