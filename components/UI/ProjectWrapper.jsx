import { FaLaptopCode } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const ProjectWrapper = ({ thumbnail, image, title, tools, isApp = false, children }) => {
    const techList = tools.split(",").map((t) => t.trim());

    return (
        <div className="card flex flex-col h-full p-0 overflow-hidden group">
            <div className="relative h-[220px] sm:h-[260px] overflow-hidden bg-secondary/30">
                <div className="absolute inset-0 flex items-end justify-center p-4">
                    <img
                        className={`${isApp ? "h-[85%]" : "w-[80%] sm:w-[70%]"} rounded-t-lg transition-transform duration-500 group-hover:scale-105`}
                        src={thumbnail}
                        alt={`${title} thumbnail`}
                    />
                </div>
                {image && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/60 flex items-center justify-center">
                        <img
                            className="w-[85%] sm:w-[75%] rounded-lg shadow-2xl"
                            src={image}
                            alt={`${title} preview`}
                        />
                    </div>
                )}
                <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium">
                        <FaLaptopCode size={12} />
                        {isApp ? "App" : "Web"}
                    </span>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                    {techList.slice(0, 5).map((tech) => (
                        <span key={tech} className="tech-badge">
                            {tech}
                        </span>
                    ))}
                    {techList.length > 5 && (
                        <span className="tech-badge">+{techList.length - 5}</span>
                    )}
                </div>

                <div className="mt-auto">{children}</div>
            </div>
        </div>
    );
};

export default ProjectWrapper;
