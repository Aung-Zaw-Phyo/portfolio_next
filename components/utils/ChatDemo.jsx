"use client"

import React, {useRef, useState} from 'react'

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AiOutlineVideoCamera } from "react-icons/ai";
import ReactPlayer from 'react-player';

const ChatDemo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const playerRef = useRef(null)

    return (
        <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)} >
            <DialogTrigger asChild>
                <button className="flex items-center">
                    <AiOutlineVideoCamera className="mr-2" />
                    <span className="text-[16px]">Demo</span>
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] md:max-w-[800px] bg-[#263141]">
                <DialogHeader>
                    <DialogTitle>Chatting Demo</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                    <ReactPlayer  
                        ref={playerRef}
                        playing={isOpen}
                        url='https://www.youtube.com/watch?v=dGDPlb_YV2I&t=29s' controls width='100%' 
                        className="border-[2px] border-white rounded "
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ChatDemo