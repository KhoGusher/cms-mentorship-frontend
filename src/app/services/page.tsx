import React from "react";

type ServiceData = {
  title: string;
  description: string;
  image: string; // Relative path to the image
};

const ServiceCard: React.FC<ServiceData> = ({ title, description, image }) => {
  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-md p-6 mb-6 transition-transform group hover:scale-105 hover:border border-blue-500">
      <img src={`/images/${image}`} alt={title} className="w-full h-40 object-cover mb-4 rounded-lg" />
      <h2 className="text-xl lg:text-2xl font-semibold mb-3 text-center">{title}</h2>
      <p className="max-w-md text-base lg:text-lg opacity-80">{description}</p>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-lg"></div>
    </div>
  );
};

const Services: React.FC = () => {
  const servicesData: ServiceData[] = [
    { title: "Web Services", description: "Website Design and Development, E-commerce Development, Content Management Systems (CMS), Web Hosting and Domain Management", image: "web-dev.webp" },
    { title: "Software Development", description: "Mobile App Development (iOS, Android), Custom Software Solutions, Desktop Application Development", image: "sw-dev.jpeg" },
    { title: "IoT Services", description: "Internet of Things (IoT) Solutions, Sensor Integration and Data Collection, IoT Platform Development, Remote Monitoring and Control", image: "iot-dev.jpg" },
    { title: "Data Analytics and AI", description: "Data Analysis and Visualization, Machine Learning Solutions, Artificial Intelligence Services, Predictive Analytics", image: "AI.jpeg" },
    { title: "IT Consulting", description: "Technology Strategy and Planning, Digital Transformation Services", image: "cons-dev.avif" },
    { title: "Networking Services", description: "Network Design and Implementation, Network Security Solutions, WAN and LAN Optimization", image: "ns-dev.jpg" },
    { title: "Digital Marketing", description: "SEO (Search Engine Optimization), Social Media Marketing, Content Marketing", image: "dm-dev.jpg" },
    { title: "Graphic  Design Services", description: "Offering expert solutions for branding, marketing materials, digital design, print, and branding needs", image: "graphic.jpg" },
    // Add more services here
  ];

  return (
    <div className="container">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {servicesData.map((service, index) => (
        <ServiceCard key={index} title={service.title} description={service.description} image={service.image} />
      ))}
    </div>
    </div>
  );
};

export default Services;
