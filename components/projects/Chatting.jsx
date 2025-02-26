import React from 'react'
import { BsGithub } from "react-icons/bs";
import { AiOutlineVideoCamera } from "react-icons/ai";
import ProjectWrapper from '../ui/ProjectWrapper';

const Chatting = () => {
  return (
    <ProjectWrapper
          thumbnail={"/images/projects/chat/thumbnail.png"}
          image={"/images/projects/chat/image.png"}
          title={'Chatting App '}
          tools={'Reactjs, ReduxToolkit, TailwindCss, NodeJs | ExpressJs and MongoDB, Socket.io'}
          isApp={true}
    >
          <p className="p-3 text-[18px]">
                This is the realtime chatting project. 
                Users can communicate each other by private chat or group chat.
                They can send text message, emoji and photos, and can delete their messages.
                They can create group with their friends and delete the group or leave from group.
          </p>
          <div className="p-3 flex flex-wrap gap-3 mt-auto">
            <a
              className="inline-block"
              href="https://github.com/Aung-Zaw-Phyo/chat-app-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center">
                <AiOutlineVideoCamera className="mr-2" />
                <span className="text-[16px]">Demo</span>
              </button>
            </a>
            <a
              className="inline-block"
              href="https://github.com/Aung-Zaw-Phyo/chat-app-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center">
                <BsGithub className="mr-2" />
                <span className="text-[16px]">Client</span>
              </button>
            </a>
            <a
                className="inline-block"
                href="https://github.com/Aung-Zaw-Phyo/chatting-app-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center">
                  <BsGithub className="mr-2" />
                  <span className="text-[16px]">Server</span>
                </button>
              </a>
          </div>
    </ProjectWrapper>
  )
}

export default Chatting