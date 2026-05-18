"use client";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="section" id="about" ref={ref}>
            <div className={`transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0-init"}`}>
                <h2 className="title mb-8">About Me</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-semibold mb-4">
                            My name is Aung Zaw Phyo.
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            I am a passionate web developer with over two years of hands-on experience in JavaScript and PHP. 
                            My journey began at a local company where I honed my skills as a junior web developer for over a year. 
                            During my tenure, I collaborated on various projects, learning the intricacies of web development and improving my coding proficiency.
                            Currently, I am building innovative projects using the programming tools I have mastered, 
                            continually practicing and learning to enhance my skills.
                        </p>
                    </div>

                    <div className="card">
                        <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                        <div className="space-y-3">
                            <a
                                href="https://github.com/Aung-Zaw-Phyo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-all duration-300 group"
                            >
                                <FaGithubSquare size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
                                <span className="text-sm">GitHub</span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/aung-zaw-phyo-a28779238/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-all duration-300 group"
                            >
                                <AiFillLinkedin size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
                                <span className="text-sm">LinkedIn</span>
                            </a>

                            <a
                                href="mailto:aungzawphyo1102@gmail.com"
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-all duration-300 group"
                            >
                                <MdMarkEmailUnread size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
                                <span className="text-sm truncate">aungzawphyo1102@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
