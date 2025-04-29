import React from 'react'
import { FaLaptopCode } from 'react-icons/fa'

const ProjectWrapper = ({thumbnail, image, title, tools, isApp = false, children}) => {
  return (
    <div className="group p-4 flex flex-col">
        <div className="h-[260px] sm:h-[300px] lg:h-[330px] relative border-[1px] border-[grey] overflow-hidden rounded-lg">
            <div className="p-2 h-auto w-auto sm:h-[660px] sm:w-[480px] -translate-x-0 -rotate-[55deg] -translate-y-28 mx-auto">
                {
                    image && (
                    <img
                        className="h-full w-full"
                        src={image}
                        alt=""
                    />)
                }
            </div>
            <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full flex items-end bg-[rgba(37,39,52,.95)] group-hover:bg-[rgba(37,39,52,0.83)] duration-300 ease-in">
                <img
                className={`${isApp ? 'h-[90%]' : 'w-[85%] sm:w-[75%] '} rounded-t-lg mx-auto`}
                src={thumbnail}
                alt=""
                />
            </div>
        </div>
        <h1 className="p-3 pb-1 text-[19px]">
            {title}
        </h1>
        <div className="p-3 flex items-start">
            <FaLaptopCode className="mr-3" size={20} />
            <span className="text-[15px] font-semibold">
                {tools}
            </span>
        </div>
        {children}
    </div>
  )
}

export default ProjectWrapper