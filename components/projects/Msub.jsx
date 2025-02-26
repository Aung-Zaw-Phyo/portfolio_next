import React from 'react'
import { BsFillLaptopFill } from "react-icons/bs";
import ProjectWrapper from "../ui/ProjectWrapper";

const Msub = () => {
    return (
        <ProjectWrapper
          thumbnail={"/images/projects/msub/thumbnail.png"}
          title={'MSub YoteShin '}
          tools={'Next.Js and TailwindCss'}
        >
          <p className="p-3 text-[18px]">
            I created this profile project for MSub YoteShin as a freelance job.
          </p>
          <div className="p-3 flex flex-wrap gap-3 mt-auto">
            <a
                className="inline-block"
                href="https://msubyoteshin.com/my"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center">
                  <BsFillLaptopFill className="mr-2" />
                  <span className="text-[16px]">MSub YoteShin</span>
                </button>
              </a>
          </div>
        </ProjectWrapper>
    )
}

export default Msub