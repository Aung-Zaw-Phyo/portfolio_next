import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import ProjectWrapper from "../ui/ProjectWrapper";

const Mtf = () => {
    return (
        <ProjectWrapper
        thumbnail={"/images/projects/mtf/thumbnail.jpeg"}
        image={"/images/projects/mtf/image.jpeg"}
        title={'Myanmar Tennis Federation'}
        tools={'PHP, Laravel, FilamentPHP and MySql, and NextJs, TailwindCss and Shadcn ui'}
      >
            <p className="p-3 text-[18px]">
                The Super Admin can manage roles & permissions, courts, timeslots, facilities, coaches, customers, and bookings.
                This project includes an OTP authentication system and language localization. Users can select their preferred date, time, court, coach, and facilities when booking, and they can complete the payment through the KBZPay Payment System
                <br />
                <br />
                Our team built this project using PHP and Laravel, with FilamentPHP for the admin dashboard and API export. The user site is developed as a Progressive Web App (PWA) using Next.js, Tailwind CSS, and ShadCN UI.
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
                <span className="text-[16px]">MTF (Admin Dashboard)</span>
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