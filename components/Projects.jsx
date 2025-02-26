import React from "react";
import Chatting from "./projects/Chatting";
import GreatSave from "./projects/GreatSave";
import Mtf from "./projects/Mtf";
import NinjaHr from "./projects/NinjaHr";
import MagicPay from "./projects/MagicPay";
import Msub from "./projects/Msub";

const Projects = () => {
  return (
    <div className="container py-12 " id="projects">
        <h1 className="title mb-4">Projects</h1>
        <div className="grid md:grid-cols-2 gap-3">
        <Chatting/>
        <GreatSave/>
        <Mtf/>
        <NinjaHr/>
        <MagicPay/>
        <Msub/>
      </div>
    </div>
  );
};

export default Projects;
