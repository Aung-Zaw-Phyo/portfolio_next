import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import ProjectWrapper from "../ui/ProjectWrapper";

const GreatSave = () => {
    return (
        <ProjectWrapper
        thumbnail={"/images/projects/great/thumbnail.jpg"}
        image={"/images/projects/great/image.jpeg"}
        title={'Great Save Security | Employees Attendance and Payroll System Project'}
        tools={'PHP, Laravel, FilamentPHP, MySql, TailwindCss and Flutter'}
        isApp={true}
      >
          <p className="p-3 text-[18px]">
            Super admin can control all role & permission and whole system (Attendance System (Present, Overtime, Leave, Absent, Resign),  Employee Payrolls System and etc ...).
            Supervisor or other role users can manage systems according to his or her role & permission.
            And application is for supervisor or user who can manage Employee Attendance System.
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
                <span className="text-[16px]">Great Save (Admin Panel)</span>
              </button>
            </a>
          </div>
      </ProjectWrapper>
    )
}

export default GreatSave