import React from 'react';
import { ArrowLeft, Calculator, Notebook as Robot, Code, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RoboticsCalculator() {
  const features = [
    "Forward and Inverse Kinematics Calculations",
    "Transformation Matrix Operations",
    "Jacobian Matrix Computation",
    "Workspace Analysis Tools",
    "Dynamic Parameter Calculations",
    "Joint Space Trajectory Planning"
  ];

  const technicalDetails = [
    "Built with MATLAB R2023a",
    "Object-Oriented Programming Architecture",
    "Custom GUI using MATLAB App Designer",
    "Real-time 3D Visualization",
    "Optimized Matrix Operations",
    "Extensible Plugin System"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-16">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8">
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Calculator size={36} />
            Robotics Calculator
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            A comprehensive MATLAB-based application for robotic arm calculations,
            designed to simplify complex mathematical operations in robotics engineering.
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
                <Robot className="text-blue-600" />
                Key Features
              </h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <ChevronRight className="text-blue-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Code className="text-blue-600" />
                Technical Implementation
              </h2>
              <ul className="space-y-4">
                {technicalDetails.map((detail, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <ChevronRight className="text-blue-600 flex-shrink-0" />
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
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
                alt="Robotics Calculator Interface"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                <p className="text-gray-600">
                  The Robotics Calculator is a sophisticated MATLAB application designed to streamline
                  complex calculations commonly encountered in robotics engineering. It provides an
                  intuitive interface for performing kinematic analysis, transformation calculations,
                  and trajectory planning for robotic systems.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Development Process</h3>
              <p className="text-gray-600 mb-4">
                The development followed an iterative approach, starting with core mathematical
                functions and gradually building up to a full-featured GUI application. Key
                milestones included:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Core mathematical engine development</li>
                <li>GUI design and implementation</li>
                <li>3D visualization system integration</li>
                <li>Optimization and performance tuning</li>
                <li>Extensive testing with real robot models</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}