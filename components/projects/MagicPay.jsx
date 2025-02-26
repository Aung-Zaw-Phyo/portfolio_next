import React from 'react'
import { BsGithub, BsFillLaptopFill } from "react-icons/bs";
import ProjectWrapper from "../ui/ProjectWrapper";


const MagicPay = () => {
    return (
        <ProjectWrapper
        thumbnail={"/images/projects/magic_pay/thumbnail.png"}
        image={"/images/projects/magic_pay/image.jpeg"}
        title={'Magic Pay | Mini E-Wallet Project'}
        tools={'HTML, Css, Bootstrap, Javascript, PHP, MySql, Laravel, Jquery and Ajax'}
      >
        <p className="p-3 text-[18px] ">
          Users can transfer money to another by Scanning QR or manually.
          I provided api in this project and then rebuilt website for user using Reactjs, ReduxToolkit and TailwindCss.
          <br />
          <a 
            className="font-semibold border-b "
            href="https://github.com/Aung-Zaw-Phyo/magic_pay.git" 
            target="_blank"
            rel="noopener noreferrer"
          > ReactJS Project Source Code</a> is here.
        </p>
        <div className="p-3 flex flex-wrap gap-3 mt-auto">
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
    )
}

export default MagicPay