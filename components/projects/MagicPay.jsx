import React from 'react'
import { BsGithub } from "react-icons/bs";
import ProjectWrapper from "../ui/ProjectWrapper";


const MagicPay = () => {
    return (
        <ProjectWrapper
        thumbnail={"/images/projects/magic_pay/thumbnail.png"}
        image={"/images/projects/magic_pay/image.jpeg"}
        title={'Magic Pay | Mini E-Wallet Project'}
        tools={'PHP, Laravel, MySql, Jquery and Ajax | ReactJs and ReduxToolkit | Flutter'}
      >
            <p className="p-3 text-[18px] ">
                Users can transfer money to others by scanning a QR code or entering details manually.
                Users can view and manage their wallet balance efficiently.
                Users can track and review their transaction records.
                Users receive notifications about their transactions and account activities.
                Users can update and manage their account details seamlessly.
                <br />
                <br />
                This is my practice project. 
                I initially built it using PHP and Laravel for both the user site and admin dashboard, 
                while also exporting an API. Later, I rebuilt the user site using React.js, ReduxToolkit, 
                and Tailwind CSS. Additionally,  I developed another version of the user site using Flutter, 
                following Clean Architecture, and Test-Driven Development (TDD)
            
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
                    <span className="text-[16px]">PHP (Laravel)</span>
                    </button>
                </a>
                <a
                    className="inline-block"
                    href="https://github.com/Aung-Zaw-Phyo/magic_pay"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="flex items-center">
                    <BsGithub className="mr-2" />
                    <span className="text-[16px]">ReactJs</span>
                    </button>
                </a>
                <a
                    className="inline-block"
                    href="https://github.com/Aung-Zaw-Phyo/magic_pay_app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="flex items-center">
                    <BsGithub className="mr-2" />
                    <span className="text-[16px]">Flutter</span>
                    </button>
                </a>
            </div>
      </ProjectWrapper>
    )
}

export default MagicPay