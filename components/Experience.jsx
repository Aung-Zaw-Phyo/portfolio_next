"use client";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ExternalLink, MapPin, Calendar } from "lucide-react";

const experiences = [
    {
        company: "Bagan Innovation Technology (BiT)",
        link: "https://baganit.com/",
        position: "Fullstack Developer",
        duration: "09/2025 – Present",
        location: "Yangon",
        description:
            "I design and develop scalable web and mobile applications using React.js, React Native, Node.js, Express, and NestJS. I build real-time features with Socket.IO and implement robust REST APIs and backend architectures. During my time here, I have been working on a social application featuring real-time chat, notifications, posts, comments, reactions, and media handling. I focus on performance optimization, clean architecture, and seamless integration between frontend and backend systems across web and mobile platforms.",
    },
    {
        company: "Omega Zero Technology",
        link: null,
        position: "Junior Fullstack Developer",
        duration: "05/2024 – 04/2025",
        location: "Yangon",
        description:
            "I developed scalable and efficient applications using Next.js and Laravel in collaboration with my teammates. I built backend systems and APIs with Laravel and Filament PHP, and created frontend interfaces using Next.js, Alpine.js, Tailwind CSS, and ShadCN UI. During my time there, I also had the opportunity to begin learning Flutter.",
    },
    {
        company: "FreshMoe Myanmar",
        link: "https://freshmoe.com/",
        position: "Intern | Junior Web Developer",
        duration: "08/2023 – 01/2024",
        location: "Yangon",
        description:
            "I built company profile websites and other user interfaces using React.js and Laravel Blade. I implemented CRUD operations and advanced Laravel relationship features, integrating them seamlessly with the frontend. I also had the opportunity to start learning Node.js during my time there.",
    },
];

const Experience = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="section" id="experience" ref={ref}>
            <div className={`transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0-init"}`}>
                <h2 className="title mb-12">Experience</h2>
                
                <div className="relative">
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2"></div>
                    
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-8 ${
                                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                            >
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-6 z-10"></div>
                                
                                <div className={`flex-1 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                                    <div className="card ml-12 md:ml-0">
                                        <div className={`flex flex-wrap items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                            <h3 className="text-xl font-semibold">
                                                {exp.link ? (
                                                    <a
                                                        href={exp.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                                                    >
                                                        {exp.company}
                                                        <ExternalLink size={14} />
                                                    </a>
                                                ) : (
                                                    exp.company
                                                )}
                                            </h3>
                                        </div>
                                        
                                        <p className="text-primary font-medium mb-2">{exp.position}</p>
                                        
                                        <div className={`flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                            <span className="inline-flex items-center gap-1.5">
                                                <Calendar size={14} />
                                                {exp.duration}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <MapPin size={14} />
                                                {exp.location}
                                            </span>
                                        </div>
                                        
                                        <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                                    </div>
                                </div>
                                
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
