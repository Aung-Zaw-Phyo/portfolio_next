import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import ProjectWrapper from "../ui/ProjectWrapper";

const GreatSave = () => {
    return (
        <ProjectWrapper
        thumbnail={"/images/projects/great/thumbnail.jpg"}
        image={"/images/projects/great/image.jpeg"}
        title={'Great Save Security '}
        tools={'PHP, Laravel, FilamentPHP, MySql, TailwindCss and Flutter'}
        isApp={true}
      >
            <p className="p-3 text-[18px]">
                The Super Admin can manage roles & permissions, employees, locations, 
                and the attendance system, including Present, Overtime, Leave, Absent, and Resignation statuses. 
                Additionally, they can oversee employee payrolls and the bonus system.
                Supervisors and other role-based users can manage the system based on their assigned roles and permissions. 
                The application is designed for supervisors or authorized users to efficiently manage the Employee Attendance System.
                <br />
                <br />
                Our team built this project using PHP and Laravel, with FilamentPHP for the admin dashboard and API export. 
                Mobile employee attendance system is developed using Flutter.
            </p>
            <div className="p-3 flex flex-wrap gap-3 mt-auto">
                <a
                className="inline-block"
                href="https://greatsavepayroll.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <button className="flex items-center">
                    <FaLaptopCode className="mr-2" />
                    <span className="text-[16px]">Great Save (Admin Dashboard)</span>
                </button>
                </a>
            </div>
      </ProjectWrapper>
    )
}

export default GreatSave