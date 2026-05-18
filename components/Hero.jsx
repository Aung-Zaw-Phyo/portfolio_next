"use client";
import { useState, useEffect } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { ChevronDown } from "lucide-react";

const roles = ["Web Developer", "Fullstack Developer", "PHP Developer", "React Developer"];

const Hero = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = roles[currentRole];
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    setDisplayText(current.substring(0, displayText.length + 1));
                    if (displayText === current) {
                        setTimeout(() => setIsDeleting(true), 1500);
                    }
                } else {
                    setDisplayText(current.substring(0, displayText.length - 1));
                    if (displayText === "") {
                        setIsDeleting(false);
                        setCurrentRole((prev) => (prev + 1) % roles.length);
                    }
                }
            },
            isDeleting ? 50 : 100
        );

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole]);

    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
            
            <div className="container relative z-10 py-16">
                <div className="flex flex-col items-center text-center">
                    <div className="relative mb-8">
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                            <img
                                className="w-full h-full object-cover"
                                src="/images/tts.png"
                                alt="Aung Zaw Phyo"
                            />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background animate-pulse"></div>
                    </div>

                    <p className="text-muted-foreground text-lg mb-3">
                        Hello, I&apos;m
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        Aung Zaw Phyo
                    </h1>

                    <div className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold mb-6 h-10">
                        <span className="typing-text">{displayText}</span>
                    </div>

                    <p className="text-muted-foreground text-lg max-w-xl mb-8">
                        I love to create websites and learn programming.
                        Building innovative solutions with modern technologies.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                        <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-primary">
                            Get In Touch
                        </a>
                        <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-outline">
                            View Projects
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/Aung-Zaw-Phyo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300 hover:-translate-y-1"
                            aria-label="GitHub"
                        >
                            <FaGithubSquare size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/aung-zaw-phyo-a28779238/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300 hover:-translate-y-1"
                            aria-label="LinkedIn"
                        >
                            <AiFillLinkedin size={24} />
                        </a>
                        <a
                            href="mailto:aungzawphyo1102@gmail.com"
                            className="p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300 hover:-translate-y-1"
                            aria-label="Email"
                        >
                            <MdMarkEmailUnread size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <button
                onClick={scrollToAbout}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
                aria-label="Scroll down"
            >
                <ChevronDown size={28} />
            </button>
        </section>
    );
};

export default Hero;
