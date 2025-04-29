import React from "react";
import Chatting from "./projects/Chatting";
import GreatSave from "./projects/GreatSave";
import Mtf from "./projects/Mtf";
import MagicPay from "./projects/MagicPay";
import Shop from "./projects/Shop";
import SafetyFood from "./projects/SafetyFood";

const Projects = () => {
  return (
    <div className="container py-12 " id="projects">
        <h1 className="title mb-4">Projects</h1>
        <div className="grid md:grid-cols-2 gap-3">
        <Chatting/>
        <Mtf/>
        <GreatSave/>
        <Shop/>
        <MagicPay/>
        <SafetyFood/>
      </div>
    </div>
  );
};

export default Projects;
