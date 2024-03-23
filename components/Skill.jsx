import React from "react";
import {AiFillHtml5} from 'react-icons/ai'
import {FaBootstrap, FaGit, FaGithubSquare, FaLaravel, } from 'react-icons/fa'
import {BiLogoCss3, BiLogoJquery, BiLogoMongodb, BiLogoNodejs, BiLogoPhp, BiLogoReact, BiLogoTailwindCss} from 'react-icons/bi'
import {DiJavascript1} from 'react-icons/di'
import {SiExpress, SiMysql} from 'react-icons/si'
import { TbBrandNextjs } from "react-icons/tb";

const Skill = () => {
    return (
        <div className="container py-12" id="skills">
            <h1 className="title mb-4">My Skills</h1>
            <div className="text-[20px]">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div>
                        <h1 className="mb-2 text-[24px]">Frontend </h1>
                        <div className="p-4">
                            <div className="flex items-center mb-3 hover:text-[yellow] cursor-pointer duration-300">
                                <AiFillHtml5 size={25} className="mr-5"/> <span>HTML5</span>
                            </div>
                            <div className="flex items-center mb-3 hover:text-[yellow] cursor-pointer duration-300">
                                <BiLogoCss3 size={25} className="mr-5"/> <span>CSS3</span>
                            </div>
                            <div className="flex items-center mb-3 hover:text-[yellow] cursor-pointer duration-300">
                                <DiJavascript1 size={25} className="mr-5"/> <span>Javascript</span>
                            </div>
                            <div className="flex items-center mb-3 hover:text-[yellow] cursor-pointer duration-300">
                                <FaBootstrap size={25} className="mr-5"/> <span>Bootstrap</span>
                            </div>
                            <div className="flex items-center mb-3 hover:text-[yellow] cursor-pointer duration-300">
                                <BiLogoTailwindCss size={25} className="mr-5"/> <span>TailwindCss</span>
                            </div>
                            <div className="flex items-center mb-3 hover:text-[yellow] cursor-pointer duration-300">
                                <BiLogoJquery size={25} className="mr-5"/> <span>Jquery</span>
                            </div>
                            <div className="flex items-center mb-3 hover:text-[yellow] cursor-pointer duration-300">
                                <BiLogoReact size={25} className="mr-5"/> <span>ReactJs</span>
                            </div>
                            <div className="flex items-center mb-3 hover:text-[yellow] cursor-pointer duration-300">
                                <TbBrandNextjs size={25} className="mr-5"/> <span>NextJs</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="mb-2 text-[24px]">Backend </h1>
                        <div className="p-4">
                            <div className="flex items-center mb-3 hover:text-[yellow] cursor-pointer duration-300">
                                <BiLogoPhp size={25} className="mr-5"/> <span>PHP</span>
                            </div>
                            <div className="flex items-center mb-3 hover:text-[yellow] cursor-pointer duration-300">
                                <FaLaravel size={25} className="mr-5"/> <span>Laravel</span>
                            </div>
                            <div className="flex items-center mb-3 hover:text-[yellow] cursor-pointer duration-300">
                                <BiLogoNodejs size={25} className="mr-5"/> <span>NodeJs</span>
                            </div>
                            <div className="flex items-center mb-3 hover:text-[yellow] cursor-pointer duration-300">
                                <SiExpress size={25} className="mr-5"/> <span>ExpressJs</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="mb-2 text-[24px]">Database</h1>
                        <div className="p-4">
                            <div className="flex items-center mb-3 hover:text-[yellow] cursor-pointer duration-300">
                                <SiMysql size={25} className="mr-5"/> <span>MySql</span>
                            </div>
                            <div className="flex items-center mb-3 hover:text-[yellow] cursor-pointer duration-300">
                                <BiLogoMongodb size={25} className="mr-5"/> <span>Mongodb</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="mb-2 text-[24px]">Others</h1>
                        <div className="p-4">
                            <div className="flex items-center mb-3 hover:text-[yellow] cursor-pointer duration-300">
                                <FaGit size={25} className="mr-5"/> <span>Git</span>
                            </div>
                            <div className="flex items-center mb-3 hover:text-[yellow] cursor-pointer duration-300">
                                <FaGithubSquare size={25} className="mr-5"/> <span>GitHub</span>
                            </div>
                        </div>
                    </div>
                </div>                    
            </div>
        </div>
    );
};

export default Skill;
