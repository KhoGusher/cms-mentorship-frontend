import React from "react";

type ProjectData = {
  title: string;
  description: string;
  image: string; // Relative path to the image
};

const ProjecCard: React.FC<ProjectData> = ({ title, description, image }) => {
  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-md p-6 mb-6 transition-transform group hover:scale-105 hover:border border-blue-500">
      <img src={`/images/${image}`} alt={title} className="w-full h-80 object-contain mb-4 rounded-lg" />
      <h2 className="text-xl lg:text-2xl font-semibold mb-3 text-center">{title}</h2>
      <p className="max-w-md text-base lg:text-lg opacity-80">{description}</p>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-lg"></div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projectsData: ProjectData[] = [
    { title: "MUBAS Engineering_Symposium Event Mobile App", description: "", image: "engineering_symposium.png" },
    { title: "Energy Monitoring System", description: "", image: "bwb-eff.png" },
    { title: "School Management System", description: "", image: "school-management-sys2.jpg" },
    { title: "Hallmark Private Schools Web App", description: "", image: "hallmark2.jpg" },
    { title: "MTL Phone Directory", description: "", image: "mtl-phone-dir2.jpg" },
    { title: "Content management systems ", description: "", image: "webdev3.jpg" },
    { title: "AI and IoT Structural Health Monitoring System-The case of bridge health monitoring system", description: "", image: "bridge2.jpg" },
    { title: "Takata247 e-commerce site", description: "", image: "takata247.png" },
    { title: "Skillsynchub jobs", description: "", image: "skillsynchub.png" }

  ];

  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {projectsData.map((service, index) => (
          <ProjecCard key={index} title={service.title} description={service.description} image={service.image} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
