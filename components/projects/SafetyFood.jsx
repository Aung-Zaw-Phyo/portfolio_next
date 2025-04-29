import React from 'react'
import { BsGithub, BsFillLaptopFill } from "react-icons/bs";
import ProjectWrapper from "../ui/ProjectWrapper";
import { BiDownload } from 'react-icons/bi';

const SafetyFood = () => {
    return (
        <ProjectWrapper
            image={"/images/projects/safety_food/safety_food_ss_3.jpg"}
            thumbnail={"/images/projects/safety_food/safety_food_ss_1.jpg"}
            title={'Safety Food'}
            tools={'Flutter, bloc and sqflite'}
            isApp={true}
        >
            <p className="p-3 text-[18px]">
                Users can search and view foods that should not be eaten together. 
                They can also add and save new incompatible food combinations, 
                as well as delete the data they have added.
                <br />
                <br />
                I built this app using Flutter, following the Clean Architecture pattern 
                with Bloc for state management, and Sqflite for local data storage. 
            </p>
            <div className="p-3 flex flex-wrap gap-3 mt-auto">
                <a
                    className="inline-block"
                    href="https://github.com/Aung-Zaw-Phyo/safety_food"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="flex items-center">
                        <BsGithub className="mr-2" />
                        <span className="text-[16px]">Flutter</span>
                    </button>
                </a>
                <a
                    className="inline-block"
                    href="/files/safety_food.apk"
                    download
                    rel="noopener noreferrer"
                >
                    <button className="flex items-center">
                        <BiDownload className="mr-2" />
                        <span className="text-[16px]">Download APK file</span>
                    </button>
                </a>
            </div>
        </ProjectWrapper>
    )
}

export default SafetyFood