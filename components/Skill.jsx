"use client";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { AiFillHtml5 } from "react-icons/ai";
import { FaBootstrap, FaGit, FaGithubSquare, FaLaravel } from "react-icons/fa";
import { BiLogoCss3, BiLogoJquery, BiLogoMongodb, BiLogoNodejs, BiLogoPhp, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { DiJavascript1, DiPhp } from "react-icons/di";
import { SiDart, SiExpress, SiMysql, SiNestjs } from "react-icons/si";
import { TbBrandFlutter, TbBrandNextjs } from "react-icons/tb";

const skillCategories = [
    {
        title: "Languages",
        skills: [
            { name: "JavaScript", icon: DiJavascript1 },
            { name: "PHP", icon: DiPhp },
            { name: "Dart", icon: SiDart },
        ],
    },
    {
        title: "Frontend",
        skills: [
            { name: "HTML5", icon: AiFillHtml5 },
            { name: "CSS3", icon: BiLogoCss3 },
            { name: "Tailwind CSS", icon: BiLogoTailwindCss },
            { name: "Bootstrap", icon: FaBootstrap },
            { name: "jQuery", icon: BiLogoJquery },
            { name: "TypeScript", icon: BiLogoTypescript },
            { name: "React.js", icon: BiLogoReact },
            { name: "Next.js", icon: TbBrandNextjs },
            { name: "Flutter", icon: TbBrandFlutter },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: BiLogoNodejs },
            { name: "Express.js", icon: SiExpress },
            { name: "NestJS", icon: SiNestjs },
            { name: "PHP", icon: BiLogoPhp },
            { name: "Laravel", icon: FaLaravel },
        ],
    },
    {
        title: "Databases",
        skills: [
            { name: "MySQL", icon: SiMysql },
            { name: "MongoDB", icon: BiLogoMongodb },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: FaGit },
            { name: "GitHub", icon: FaGithubSquare },
        ],
    },
];

const Skill = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="section" id="skills" ref={ref}>
            <div className={`transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0-init"}`}>
                <h2 className="title mb-12">Skills</h2>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className={`card transition-all duration-500 ${
                                isVisible ? "animate-slide-up" : "opacity-0-init"
                            }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <h3 className="text-lg font-semibold mb-4 text-primary">{category.title}</h3>
                            <div className="space-y-3">
                                {category.skills.map((skill) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div
                                            key={skill.name}
                                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-all duration-300 group cursor-default"
                                        >
                                            <Icon
                                                size={22}
                                                className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"
                                            />
                                            <span className="text-sm group-hover:text-foreground transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
