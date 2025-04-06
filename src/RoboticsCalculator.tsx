import React from 'react';
import RoboticsCalculatorImage from './RoboticsCalculator.png';
import { 
  ArrowLeft, 
  Calculator, 
  Bot,
  Code, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowRight, 
  FileText 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RoboticsCalculator() {
  const features = [
    "Forward and Inverse Kinematics Calculations",
    "Transformation Matrix Operations",
    "Jacobian Matrix Computation",
    "Callback Function Implementation",
    "Robotics Calculator Interface",
    "User Input via Table Manipulation",
    "Multiple Value Assessment"
  ];

  const technicalDetails = [
    "Built with MATLAB R2023a",
    "Object-Oriented Programming Architecture",
    "Custom GUI using MATLAB App Designer",
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
          The Robotics Calculator is an advanced MATLAB application for performing kinematic analysis, transformation calculations, and trajectory planning in robotics engineering.
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
                <Bot className="text-blue-600" />
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
                src={RoboticsCalculatorImage}
                alt="Robotics Calculator Interface"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                <p className="text-gray-600">
                This tool simplifies complex robotics computations with an intuitive interface. It utilizes powerful functions from Peter Corke's Toolbox and the Robotics System Toolbox. Built with MATLAB R2023a, it streamlines engineering workflows for robotics professionals.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Development Process</h3>
              <p className="text-gray-600 mb-4">
              The development followed an iterative approach. The core mathematical engine was developed first, followed by the design and implementation of the GUI. The 3D visualization system was integrated to enhance user experience, and extensive testing was carried out using real robot models. Callback functions were used to execute the necessary functions, and the app was optimized for ease of use. The final product was tested with students, who praised the app for being intuitive and user-friendly, with one user commenting, "the app is easy to use."

              Team Contribution: I shared the responsibility of programming the entire app and backend code alongside Rahul Thorat, a brilliant coder from ASU. Together, they successfully programmed the app in less than a week, adding additional functions to improve its usability.

              Find MATLAB codes and documentation here.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Core mathematical engine development</li>
                <li>GUI design and implementation</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}