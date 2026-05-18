"use client";
import { useState, useEffect } from "react";
import { Briefcase } from "lucide-react";
import { AiFillHome } from "react-icons/ai";
import { BiSolidUserAccount } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { MdOutlineWork } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { useActiveSection } from "@/hooks/use-scroll-animation";

const navItems = [
    { id: "home", label: "Home", icon: AiFillHome },
    { id: "about", label: "About", icon: BiSolidUserAccount },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: BsCodeSlash },
    { id: "projects", label: "Projects", icon: MdOutlineWork },
    { id: "contact", label: "Contact", icon: SiMinutemailer },
];

const Navigator = () => {
    const sectionIds = navItems.map((item) => item.id);
    const activeSection = useActiveSection(sectionIds);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const scrollToSection = (id) => {
        if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    if (isMobile) {
        return (
            <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-t border-border/50 md:hidden">
                <div className="flex justify-around items-center py-2">
                    {navItems.map(({ id, label, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className={`flex flex-col items-center gap-0.5 p-2 rounded-lg transition-all duration-300 ${
                                activeSection === id
                                    ? "text-primary"
                                    : "text-muted-foreground hover:text-primary"
                            }`}
                            aria-label={label}
                        >
                            <Icon size={20} />
                            <span className="text-[10px]">{label}</span>
                        </button>
                    ))}
                </div>
            </nav>
        );
    }

    return (
        <nav className="fixed top-1/2 right-4 z-50 -translate-y-1/2 hidden md:block">
            <div className="bg-card/80 backdrop-blur-lg rounded-xl border border-border/50 p-2 shadow-lg">
                {navItems.map(({ id, label, icon: Icon }, index) => (
                    <div key={id} className="relative group">
                        <button
                            onClick={() => scrollToSection(id)}
                            className={`p-2.5 rounded-lg transition-all duration-300 ${
                                activeSection === id
                                    ? "text-primary bg-primary/10"
                                    : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                            }`}
                            aria-label={label}
                        >
                            <Icon size={20} />
                        </button>
                        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 bg-card border border-border/50 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 shadow-lg">
                            {label}
                            <div className="absolute left-full top-1/2 -translate-y-1/2 -ml-1 w-2 h-2 bg-card border-r border-t border-border/50 rotate-45"></div>
                        </div>
                        {index < navItems.length - 1 && (
                            <div className="w-px h-3 bg-border/50 mx-auto"></div>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Navigator;
