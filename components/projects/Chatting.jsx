import React from 'react'
import { BsGithub } from "react-icons/bs";
import ProjectWrapper from '../ui/ProjectWrapper';
import ChatDemo from '../utils/ChatDemo';

const Chatting = () => {
  return (
    <ProjectWrapper
          thumbnail={"/images/projects/chat/thumbnail.png"}
          image={"/images/projects/chat/image.png"}
          title={'Chatting App '}
          tools={'Reactjs, ReduxToolkit, TailwindCss, NodeJs, ExpressJs and MongoDB, Socket.io'}
          isApp={true}
    >
          <p className="p-3 text-[18px]">
                Users can register with an email verification system to ensure account security.
                Users can communicate seamlessly through one-on-one private messages or group conversations with multiple participants.
                Users can send text messages, emojis, and photos and they can also delete their messages in real time.
                Users can create chat groups, invite friends, and manage members. They also have the option to leave a group or delete it entirely.
                <br/>
                <br/>
                I built this real-time chatting project using Node.js, Express.js, MongoDB, 
                and Socket.io for the backend API. 
                The frontend is developed with React.js, ReduxToolkit, Tailwind CSS, and Socket.io.
          </p>
          <div className="p-3 flex flex-wrap gap-3 mt-auto">
            <ChatDemo/>
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