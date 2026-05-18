"use client";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Chatting from "./projects/Chatting";
import GreatSave from "./projects/GreatSave";
import Mtf from "./projects/Mtf";
import MagicPay from "./projects/MagicPay";
import Shop from "./projects/Shop";
import SafetyFood from "./projects/SafetyFood";

const Projects = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="section" id="projects" ref={ref}>
            <div className={`transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0-init"}`}>
                <h2 className="title mb-10">Projects</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <Chatting />
                    <Mtf />
                    <GreatSave />
                    <Shop />
                    <MagicPay />
                    <SafetyFood />
                </div>
            </div>
        </section>
    );
};

export default Projects;
