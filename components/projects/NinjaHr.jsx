import React from 'react'
import { BsGithub } from "react-icons/bs";
import ProjectWrapper from "../ui/ProjectWrapper";

const NinjaHr = () => {
    return (
        <ProjectWrapper
        thumbnail={"/images/projects/ninja_hr/thumbnail.png"}
        image={"/images/projects/ninja_hr/image.png"}
        title={'Ninja HR | Employee Management System Project'}
        tools={'HTML, Css, Bootstrap, Javascript, PHP, MySql, Laravel, Jquery and Ajax'}
      >
        <p className="p-3 text-[18px]">
          User can login by fingerprint or password and add attendance by pincode or QRSCAN.
          User can manage Payroll system, Attendance system, Project Management system (Creating project, Assigning task to memeber, etc...) and etc...
          according to role & permission.I used a lot of plugins (Larapass (fingerprint), Javascript image viewer, SortableJS, etc ...) in this project.
        </p>
        <div className="p-3 flex flex-wrap gap-3 mt-auto">
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
    )
}

export default NinjaHr