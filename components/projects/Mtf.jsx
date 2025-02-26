import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import ProjectWrapper from "../ui/ProjectWrapper";

const Mtf = () => {
    return (
        <ProjectWrapper
        thumbnail={"/images/projects/mtf/thumbnail.jpeg"}
        image={"/images/projects/mtf/image.jpeg"}
        title={'Myanmar Tennis Federation'}
        tools={'PHP, Laravel, FilamentPHP, MySql, TailwindCss for dashboard, NextJs, TailwindCss for PWA and KBZPay Payment System'}
      >
        <p className="p-3 text-[18px]">
          Super admin can control all role & permission and whole system 
          (Managing of Role & Permission, Courts, Timeslots, Facilities, Bookings and etc ..).
          User can choose avaliable time, courts, coach and etc as he like to book and then he can pay by KBZPay.
        </p>
        <div className="p-3 flex flex-wrap gap-3 mt-auto">
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
    )
}

export default Mtf