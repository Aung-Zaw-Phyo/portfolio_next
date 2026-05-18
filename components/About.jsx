import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
const experiences = [
  {
    company: "Omega Zero Technology",
    position: "Junior Fullstack Developer",
    duration: "05/2024 – 04/2025",
    location: "Yangon",
    description:
      "I developed scalable and efficient applications using Next.js and Laravel in collaboration with my teammates. I built backend systems and APIs with Laravel and Filament PHP, and created frontend interfaces using Next.js, Alpine.js, Tailwind CSS, and ShadCN UI. During my time there, I also had the opportunity to begin learning Flutter.",
  },
  {
    company: "FreshMoe Myanmar",
    position: "Intern | Junior Web Developer",
    duration: "08/2023 – 01/2024",
    location: "Yangon",
    description:
      "I built company profile websites and other user interfaces using React.js and Laravel Blade. I implemented CRUD operations and advanced Laravel relationship features, integrating them seamlessly with the frontend. I also had the opportunity to start learning Node.js during my time there.",
  },
];


const About = () => {
    return (
        <div className="container py-12" id="about">
            <div className="flex flex-col justify-center w-full ">
            <h1 className="title mb-1">About Me</h1>
            <div className="p-4">
                <h1 className="text-[22px] sm:text-[24px] mb-1">
                My name is Aung Zaw Phyo.
                </h1>
                <p className="mb-3 md:text-[18px]">
                I am a passionate web developer with over two years of hands-on experience in JavaScript and PHP. 
                My journey began at a local company where I honed my skills as a junior web developer for over a year. 
                During my tenure, I collaborated on various projects, learning the intricacies of web development and improving my coding proficiency.
                Currently, I am building innovative projects using the programming tools I have mastered, 
                continually practicing and learning to enhance my skills.
                </p>
                <div className="text-[18px] sm:text-[20px] mt-2">
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
                    href="mailto:aungzawphyo1102@gmail.com"
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
    );
};

export default About;
