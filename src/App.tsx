import ashishImage from './ashish.jpg';
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ExternalLink, User, Code, Briefcase, Cpu, Notebook as Robot, BrainCircuit as Circuit, Cog, ChevronRight, ArrowRight } from 'lucide-react';
import RoboticsCalculator from './RoboticsCalculator';
import RoboticArmControl from './RoboticArmControl';
import MachineVision from './MachineVision';

function HomePage() {
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
      title: "Robotics Calculator",
      description: "Simplified Matlab App for solving pose and transformation calculation",
      tags: ["MATLAB", "MATLAB GUI", "Iacobians", "Inverse Kinematics"],
      link: "/projects/robotics-calculator",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Robotic Arm Control Interface",
      description: "Created a real-time control system for a 6-DOF robotic arm with inverse kinematics",
      tags: ["C++", "ROS", "Control Systems", "Qt"],
      link: "/projects/robotic-arm-control",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Machine Vision System",
      description: "Implemented an AI-powered vision system for object detection and pose estimation",
      tags: ["Python", "OpenCV", "Deep Learning", "PyTorch"],
      link: "/projects/machine-vision",
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

      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`flex flex-col items-start text-left transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <div className="relative mb-8">
                <img 
                  src={ashishImage}
                  alt="Profile" 
                  className="w-48 h-48 rounded-2xl border-4 border-white shadow-xl object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white p-3 rounded-xl shadow-lg animate-pulse">
                  <Robot size={28} />
                </div>
              </div>
              <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                I'm Ashish
              </h1>
              <h2 className="text-3xl text-gray-700 mb-6 flex items-center gap-3">
                <Cpu className="text-blue-600" /> Robotics Engineer & AI Enthusiast
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A passionate robotics engineer with expertise in autonomous systems and industrial automation. 
                I specialize in developing intelligent robotic solutions that bridge the gap between theoretical 
                concepts and practical applications. With a strong foundation in control systems, machine vision, 
                and AI, I strive to push the boundaries of what's possible in modern robotics.
              </p>
              <div className="flex gap-6 mb-12">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                  className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all hover:scale-110 shadow-md">
                  <Github size={24} className="text-gray-700" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all hover:scale-110 shadow-md">
                  <Linkedin size={24} className="text-gray-700" />
                </a>
                <a href="mailto:your.email@example.com"
                  className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all hover:scale-110 shadow-md">
                  <Mail size={24} className="text-gray-700" />
                </a>
              </div>
              <a 
                href="#projects"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg group"
              >
                View My Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className={`relative transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className="relative w-full h-[500px] bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80"
                  alt="Robotic Arm"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent">
                  <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">Robotics Specialist</h3>
                    <p className="text-gray-700">Transforming complex robotics challenges into elegant solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Circuit className="text-blue-600" /> Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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

      {/* Projects Section */}
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
                  <Link 
                    to={project.link} 
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 group"
                  >
                    View Project 
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Interested in collaborating on robotics projects or discussing automation solutions?
            Let's connect and explore the possibilities!
          </p>
          <a 
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
          >
            <Mail size={20} /> Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-6 border-t border-gray-100">
        <div className="container mx-auto text-center text-gray-600">
          <p>© {new Date().getFullYear()} Ashish Anil Bhogate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/robotics-calculator" element={<RoboticsCalculator />} />
      <Route path="/projects/robotic-arm-control" element={<RoboticArmControl />} />
      <Route path="/projects/machine-vision" element={<MachineVision />} />
    </Routes>
  );
}

export default App;