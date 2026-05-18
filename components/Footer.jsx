import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
            <div className="container py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold mb-1">Aung Zaw Phyo</h3>
                        <p className="text-muted-foreground text-sm">
                            Fullstack Developer crafting modern web & mobile experiences
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/Aung-Zaw-Phyo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
                            aria-label="GitHub"
                        >
                            <FaGithubSquare size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/aung-zaw-phyo-a28779238/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <AiFillLinkedin size={24} />
                        </a>
                        <a
                            href="mailto:aungzawphyo1102@gmail.com"
                            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
                            aria-label="Email"
                        >
                            <MdMarkEmailUnread size={24} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/50 text-center">
                    <p className="text-sm text-muted-foreground">
                        &copy; {currentYear} Aung Zaw Phyo. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
