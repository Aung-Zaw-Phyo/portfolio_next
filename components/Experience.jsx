import React from "react";

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
  return (
    <section className="container py-12" id="experience">
      <h2 className="title mb-4">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative border-l-2 border-accent pl-6">
            <div className="flex justify-between flex-wrap md:flex-nowrap mb-1">
              <h3 className="text-[24px]">{exp.company}</h3>
              <div className="text-sm text-purple-700 font-medium">{exp.duration}</div>
            </div>
            <div className="flex justify-between flex-wrap md:flex-nowrap mb-2">
              <p className="italic text-gray-400">{exp.position}</p>
              <p className="text-sm text-gray-500">{exp.location}</p>
            </div>
            <p className="text-gray-300 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
