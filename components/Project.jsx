import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { BsFillLaptopFill, BsGithub } from "react-icons/bs";
import ProjectWrapper from "./UI/ProjectWrapper";

const Project = () => {
  return (
    <div className="container py-12 " id="projects">
      <h1 className="title mb-4">Projects</h1>
      <div className="grid md:grid-cols-2 gap-3">

        <ProjectWrapper
          thumbnail={"/images/projects/great/thumbnail.jpg"}
          image={"/images/projects/great/image.jpeg"}
          title={'Great Save Security | Employees Attendance and Payroll System Project'}
          tools={'PHP, Laravel, FilamentPHP, MySql, TailwindCss and Flutter'}
          isApp={true}
        >
            <p className="mb-4 text-[18px]">
              Super admin can control all role & permission and whole system (Attendance System (Present, Overtime, Leave, Absent, Resign),  Employee Payrolls System and etc ...).
              Supervisor or other role users can manage systems according to his or her role & permission.
              And application is for supervisor or user who can manage Employee Attendance System.
            </p>
            <a
              className="inline-block"
              href="https://greatsavepayroll.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center">
                <FaLaptopCode className="mr-2" />
                <span className="text-[16px]">Great Save (Admin Panel)</span>
              </button>
            </a>
        </ProjectWrapper>

        <ProjectWrapper
          thumbnail={"/images/projects/mtf/thumbnail.jpeg"}
          image={"/images/projects/mtf/image.jpeg"}
          title={'Myanmar Tennis Federation'}
          tools={'PHP, Laravel, FilamentPHP, MySql, TailwindCss for dashboard, NextJs, TailwindCss for PWA and KBZPay Payment System'}
        >
          <p className="mb-4 text-[18px]">
            Super admin can control all role & permission and whole system 
            (Managing of Role & Permission, Courts, Timeslots, Facilities, Bookings and etc ..).
            User can choose avaliable time, courts, coach and etc as he like to book and then he can pay by KBZPay.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-block"
              href="https://admin.myanmartennisfed.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center">
                <FaLaptopCode className="mr-2" />
                <span className="text-[16px]">MTF (Admin Panel)</span>
              </button>
            </a>
            <a
              className="inline-block"
              href="https://myanmartennisfed.com/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center">
                <FaLaptopCode className="mr-2" />
                <span className="text-[16px]">MTF (Customer Site)</span>
              </button>
            </a>
          </div>
        </ProjectWrapper>

        <ProjectWrapper
          thumbnail={"/images/projects/ninja_hr/thumbnail.png"}
          image={"/images/projects/ninja_hr/image.png"}
          title={'Ninja HR | Employee Management System Project'}
          tools={'HTML, Css, Bootstrap, Javascript, PHP, MySql, Laravel, Jquery and Ajax'}
        >
          <p className="mb-4 text-[18px]">
            User can login by fingerprint or password and add attendance by pincode or QRSCAN.
            User can manage Payroll system, Attendance system, Project Management system (Creating project, Assigning task to memeber, etc...) and etc...
            according to role & permission.I used a lot of plugins (Larapass (fingerprint), Javascript image viewer, SortableJS, etc ...) in this project.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-block"
              href="https://github.com/Aung-Zaw-Phyo/ninja_hr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center">
                <BsGithub className="mr-2" />
                <span className="text-[16px]">Ninja Hr (Source Code)</span>
              </button>
            </a>
          </div>
        </ProjectWrapper>

        <ProjectWrapper
          thumbnail={"/images/projects/magic_pay/thumbnail.png"}
          image={"/images/projects/magic_pay/image.jpeg"}
          title={'Magic Pay | Mini E-Wallet Project'}
          tools={'HTML, Css, Bootstrap, Javascript, PHP, MySql, Laravel, Jquery and Ajax'}
        >
          <p className="mb-4 text-[18px] ">
            User can transfer money to another by Scanning QR or manually.
            I provided apis in this project and then rebuilt website for user using Reactjs, ReduxToolkit and TailwindCss.
            <a 
              className="font-semibold border-b border-white"
              href="https://github.com/Aung-Zaw-Phyo/magic_pay.git" 
              target="_blank"
              rel="noopener noreferrer"
            >ReactJS Project Source Code</a> is here.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-block"
              href="https://github.com/Aung-Zaw-Phyo/MagicPay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center">
                <BsGithub className="mr-2" />
                <span className="text-[16px]">Magic Pay (Source Code)</span>
              </button>
            </a>
            <a
              className="inline-block"
              href="https://magicpay.aungzawphyo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center">
                <BsFillLaptopFill className="mr-2" />
                <span className="text-[16px]">Magic Pay (Customer Site)</span>
              </button>
            </a>
          </div>
        </ProjectWrapper>

        <ProjectWrapper
          thumbnail={"/images/projects/chat/thumbnail.png"}
          image={"/images/projects/chat/image.png"}
          title={'Chatting App '}
          tools={'Reactjs, ReduxToolkit, TailwindCss, Nodejs | Express and MongoDB'}
          isApp={true}
        >
          <p className="mb-4 text-[18px]">
            User can communicate each other by private chat or group chat.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-block"
              href="https://github.com/Aung-Zaw-Phyo/chat-app-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center">
                <BsGithub className="mr-2" />
                <span className="text-[16px]">Chat App (Source Code)</span>
              </button>
            </a>
            <a
                className="inline-block"
                href="https://chat.aungzawphyo.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center">
                  <BsFillLaptopFill className="mr-2" />
                  <span className="text-[16px]">Chat App (Demo)</span>
                </button>
              </a>
          </div>
        </ProjectWrapper>


        <ProjectWrapper
          thumbnail={"/images/projects/export/thumbnail.png"}
          title={'Export '}
          tools={'Reactjs and TailwindCss'}
        >
          <p className="mb-4 text-[18px]">
            User can use it to export PDF or print for personal or small sale business. 
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-block"
              href="https://github.com/Aung-Zaw-Phyo/export"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center">
                <BsGithub className="mr-2" />
                <span className="text-[16px]">Export (Source Code)</span>
              </button>
            </a>
            <a
                className="inline-block"
                href="https://export-three.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center">
                  <BsFillLaptopFill className="mr-2" />
                  <span className="text-[16px]">Export (Demo)</span>
                </button>
              </a>
          </div>
        </ProjectWrapper>

        {/* Movie App */}
        {/* <div className="p-4">
          <div className="max-h-[350px] relative overflow-hidden rounded-lg">
            <div className="p-2 h-auto w-auto sm:h-[600px] sm:w-[360px] -rotate-[55deg] -translate-y-28 mx-auto">
              <img
                className="h-full w-full"
                src={"/images/projects/movie_bg.jpeg"}
                alt=""
              />
            </div>
            <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full flex items-end bg-[rgba(37,39,52,.95)]">
              <img
                className="w-[85%] sm:w-[75%] rounded-t-lg mx-auto"
                src={"/images/projects/movie.png"}
                alt=""
              />
            </div>
          </div>
          <div className="p-3">
            <h1 className="mb-2 text-[18px]">Movie App</h1>
            <div className="flex items-start mb-3">
              <FaLaptopCode className="mr-3" size={20} />
              <span className="text-[15px]">
                {" "}
                Reactjs, TailwindCss and Node.js scraping api{" "}
              </span>
            </div>
            <div>
              <a
                className="inline-block mr-4"
                href="https://github.com/Aung-Zaw-Phyo/movie_app_client"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center">
                  <BsGithub className="mr-2" />
                  <span className="text-[16px]">Movie App</span>
                </button>
              </a>
              <a
                className="inline-block"
                href="https://movie-five-eta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center">
                  <BsFillLaptopFill className="mr-2" />
                  <span className="text-[16px]">Movie App (Demo)</span>
                </button>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
