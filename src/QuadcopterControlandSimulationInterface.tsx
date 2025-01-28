import React from 'react';
import QuadcopterImage from './Quadcopter.png';
import { ArrowLeft, Notebook as Robot, Code, ChevronRight, Settings, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuadcopterControlandSimulationInterface() {
  const features = [
    "Comprehensive Quadcopter Modeling",
    "State-Space Representation",
    "Advanced Z-Axis Control",
    "PID Controller Integration",
    "Safety Monitoring System",
    "Simulation Environment"
  ];

  const technicalDetails = [
    "Modeling Framework: Dynamic equations for quadcopter motion based on free-body diagrams and state-space representation",
    "Control System: PID controller with eigenvalue placement to achieve desired stability and responsiveness",
    "Simulation Tools: MATLAB Simulink for modeling, debugging, and iterative testing",
    "Key Metrics: Controlled overshoot (<10%) and settling time (3-5 seconds) for precision"
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
            Quadcopter Control and Simulation Interface
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl">
          A sophisticated simulation and control system for quadcopter drones, featuring dynamic modeling, state-space representation, and advanced vertical motion control
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
                src={QuadcopterImage}
                alt="Robotic Arm Interface"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                <p className="text-gray-600">
                This project provides an in-depth understanding of quadcopter dynamics and control mechanisms, emphasizing Z-axis stability. It combines theoretical modeling with practical simulations to bridge the gap between abstract dynamics and real-world aerial vehicle applications
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">System Architecture</h3>
              <p className="text-gray-600 mb-4">
                The system is built on a modular architecture with these key components:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Quadcopter Dynamics Module</li>
                <li>Controller Design Module</li>
                <li>Simulation Layer</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}