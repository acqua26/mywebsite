import React from 'react';
import { ArrowLeft, Notebook as Robot, Code, ChevronRight, Settings, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RoboticArmControl() {
  const features = [
    "Real-time Joint Control and Monitoring",
    "Inverse Kinematics Solver",
    "Path Planning and Trajectory Generation",
    "3D Visualization of Robot State",
    "Safety Monitoring System",
    "Custom G-code Interpreter"
  ];

  const technicalDetails = [
    "C++ with Qt Framework for GUI",
    "ROS Integration for Robot Communication",
    "Custom Inverse Kinematics Library",
    "Real-time Control Loop at 1kHz",
    "OpenGL-based 3D Visualization",
    "Modular Plugin Architecture"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-6 py-16">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8">
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Robot size={36} />
            Robotic Arm Control Interface
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl">
            A sophisticated control system for industrial robotic arms, featuring real-time control,
            advanced path planning, and intuitive operator interface.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Settings className="text-purple-600" />
                Key Features
              </h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <ChevronRight className="text-purple-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Code className="text-purple-600" />
                Technical Implementation
              </h2>
              <ul className="space-y-4">
                {technicalDetails.map((detail, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <ChevronRight className="text-purple-600 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80"
                alt="Robotic Arm Interface"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                <p className="text-gray-600">
                  The Robotic Arm Control Interface is a comprehensive solution for controlling
                  industrial robotic arms. It combines advanced control algorithms with an
                  intuitive user interface, making complex robotics operations accessible to
                  operators while maintaining precise control and safety standards.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">System Architecture</h3>
              <p className="text-gray-600 mb-4">
                The system is built on a modular architecture with these key components:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Real-time Control Module</li>
                <li>Safety Monitoring System</li>
                <li>Path Planning Engine</li>
                <li>User Interface Layer</li>
                <li>Hardware Communication Layer</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}