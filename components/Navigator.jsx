"use client"
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react'
import { AiFillHome } from 'react-icons/ai';
import { BiSolidUserAccount } from 'react-icons/bi';
import { BsCodeSlash } from 'react-icons/bs';
import { MdOutlineWork } from 'react-icons/md';
import { SiMinutemailer } from 'react-icons/si';

const Navigator = () => {
    const router = useRouter()

    const navigate = (type) => {
        if (type === "home") {
            router.push('')
        }
        if (type === "about") {
            router.push('#about')
        }
        if (type === "skill") {
            router.push('#skills')
        }
        if (type === "project") {
            router.push('#projects')
        }
        if (type === "contact") {
            router.push('#contact')
        }
    };

  return (
    <div className=" fixed top-[10%] right-[10px] md:right-[20px] z-50">
        <div className="bg-white rounded-lg text-[#333]">
          <div
            className="group relative p-2 mb-2 cursor-pointer hover:text-[#6159CB] duration-100"
            onClick={navigate.bind(null, "home")}
          >
            <div className="absolute top-0 left-[-230%] w-[85px] text-center text-white font-semibold bg-[#ffffff27] p-1 px-3 rounded-lg hidden group-hover:block duration-300">
              Home
            </div>
            <AiFillHome size={25} />
          </div>
          <div
            className="group relative p-2 mb-2 cursor-pointer hover:text-[#6159CB] duration-100"
            onClick={navigate.bind(null, "about")}
          >
            <div className="absolute top-0 left-[-230%] w-[85px] text-center text-white font-semibold bg-[#ffffff27] p-1 px-3 rounded-lg hidden group-hover:block duration-300">
              About
            </div>
            <BiSolidUserAccount size={25} />
          </div>
          <div
            className="group relative p-2 mb-2 cursor-pointer hover:text-[#6159CB] duration-100"
            onClick={navigate.bind(null, "skill")}
          >
            <div className="absolute top-0 left-[-230%] w-[85px] text-center text-white font-semibold bg-[#ffffff27] p-1 px-3 rounded-lg hidden group-hover:block duration-300">
              Skill
            </div>
            <BsCodeSlash size={25} />
          </div>
          <div
            className="group relative p-2 mb-2 cursor-pointer hover:text-[#6159CB] duration-100"
            onClick={navigate.bind(null, "project")}
          >
            <div className="absolute top-0 left-[-230%] w-[85px] text-center text-white font-semibold bg-[#ffffff27] p-1 px-3 rounded-lg hidden group-hover:block duration-300">
              Project
            </div>
            <MdOutlineWork size={25} />
          </div>
          <div
            className="group relative p-2 mb-2 cursor-pointer hover:text-[#6159CB] duration-100"
            onClick={navigate.bind(null, "contact")}
          >
            <div className="absolute top-0 left-[-230%] w-[85px] text-center text-white font-semibold bg-[#ffffff27] p-1 px-3 rounded-lg hidden group-hover:block duration-300">
              Contact
            </div>
            <SiMinutemailer size={25} />
          </div>
        </div>
      </div>

  )
}

export default Navigator