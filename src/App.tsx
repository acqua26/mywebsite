import React, { useEffect, useState } from 'react';
import ashishImage from './ashish.jpg';
import { Github, Linkedin, Mail, ExternalLink, User, Code, Briefcase, Cpu, Notebook as Robot, BrainCircuit as Circuit, Cog, ChevronRight, ArrowRight } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleVisibility = () => {
      setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleVisibility, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "Autonomous Navigation System",
      description: "Developed a ROS-based navigation system for mobile robots using SLAM and path planning algorithms",
      tags: ["ROS", "Python", "SLAM", "Computer Vision"],
      link: "#",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Robotic Arm Control Interface",
      description: "Created a real-time control system for a 6-DOF robotic arm with inverse kinematics",
      tags: ["C++", "ROS", "Control Systems", "Qt"],
      link: "#",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Machine Vision System",
      description: "Implemented an AI-powered vision system for object detection and pose estimation",
      tags: ["Python", "OpenCV", "Deep Learning", "PyTorch"],
      link: "#",
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const skills = [
    { category: "Robotics", items: ["ROS/ROS2", "Inverse Kinematics", "Motion Planning", "Control Systems"] },
    { category: "Programming", items: ["C++", "Python", "MATLAB", "Robot Programming"] },
    { category: "Hardware", items: ["Sensors Integration", "Actuators", "Microcontrollers", "PCB Design"] }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header/Navigation */}
      <header className={`fixed w-full bg-white/80 backdrop-blur-sm z-10 border-b border-gray-100 shadow-sm transition-all duration-300 ${scrollY > 50 ? 'py-2' : 'py-4'}`}>
        <nav className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold flex items-center gap-2">
              <Robot className={`text-blue-600 transition-transform duration-500 ${isVisible ? 'rotate-0' : '-rotate-180'}`} /> 
              𝓪𝓼𝓱𝓲𝓼𝓱
            </div>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                <User size={18} /> About
              </a>
              <a href="#projects" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                <Code size={18} /> Projects
              </a>
              <a href="#contact" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                <Mail size={18} /> Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with Robotic Arm Animation */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`flex flex-col items-start text-left transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <div className="relative mb-8">
                <img 
                  src={ashishImage}
                  alt="Profile" 
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full animate-pulse">
                  <Robot size={24} />
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-6">Ashish Anil Bhogate</h1>
              <h2 className="text-2xl text-gray-600 mb-8 flex items-center gap-2">
                <Cpu size={24} className="text-blue-600" /> Robotics Engineer
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Specializing in autonomous systems, robotic control, and machine vision. 
                Passionate about creating intelligent robotic solutions that bridge the gap between 
                theoretical robotics and practical applications.
              </p>
              <div className="flex gap-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all hover:scale-110">
                  <Github size={24} className="text-gray-700" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all hover:scale-110">
                  <Linkedin size={24} className="text-gray-700" />
                </a>
                <a href="mailto:your.email@example.com"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all hover:scale-110">
                  <Mail size={24} className="text-gray-700" />
                </a>
              </div>
            </div>
            <div className={`relative transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              {/* Robotic Arm SVG Animation */}
              <div className="relative w-full h-[400px] bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80"
                  alt="Robotic Arm"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent">
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-600">Industrial Robotics Expert</h3>
                    <p className="text-gray-600">Specializing in robotic arm kinematics and control systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Animated Cards */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Circuit className="text-blue-600" /> Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-600">{skillSet.category}</h3>
                <ul className="space-y-2">
                  {skillSet.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2 text-gray-700 group">
                      <ChevronRight size={16} className="text-blue-600 transition-transform group-hover:translate-x-1" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Image Cards */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Cog className="text-blue-600" /> Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-600">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 group"
                  >
                    View Project 
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Hover Effects */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Interested in collaborating on robotics projects or discussing automation solutions?
            Let's connect and explore the possibilities!
          </p>
          <a 
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
          >
            <Mail size={20} /> Contact Me
          </a>
        </div>
      </section>

      {/* Footer with Gradient Border */}
      <footer className="bg-white py-8 px-6 border-t border-gray-100">
        <div className="container mx-auto text-center text-gray-600">
          <p>© {new Date().getFullYear()} Ashish Anil Bhogate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;