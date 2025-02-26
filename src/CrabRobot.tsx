import React from 'react';
import { ArrowLeft, Eye, Code, ChevronRight, Brain, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const CrabRobot = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Crab Walking Robot using Strandbeest Mechanism
          </h1>
        </div>

        <div className="mt-10">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p>
              This project explores expressive robotics through the design and implementation 
              of a robotic crab using the Strandbeest mechanism. The robot combines Jansen's 
              linkage with modern control systems to create fluid, biomimetic movement.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Technical Specifications</h2>
            <ul>
              <li>Dual NEMA17 stepper motors with A4988 drivers</li>
              <li>Arduino Uno microcontroller with custom PCB shield</li>
              <li>6mm laser-cut acrylic structural components</li>
              <li>Custom 5:1 reduction gear system</li>
              <li>Analog joystick control interface</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Control System Architecture</h2>
            <p>
              The control system utilizes an Arduino-based platform with the following key features:
            </p>
            <ul>
              <li>AccelStepper library for motor synchronization</li>
              <li>PID control loop for speed regulation</li>
              <li>Inverse kinematics for differential steering</li>
              <li>Custom gait pattern generation</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Performance Metrics</h2>
            <ul>
              <li>Maximum walking speed: 0.3 meters/second</li>
              <li>Turning radius: 50cm minimum</li>
              <li>Battery life: 4+ hours continuous operation</li>
              <li>Payload capacity: 500g</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Development Process</h2>
            <p>
              The development involved iterative prototyping phases:
            </p>
            <ol>
              <li>Initial CAD design and simulation in Fusion 360</li>
              <li>Prototype testing with 3D printed components</li>
              <li>Final implementation using laser-cut acrylic</li>
              <li>Control system optimization and tuning</li>
            </ol>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Project Documentation</h2>
              <p>
                Complete technical documentation, including CAD files, Arduino code, and 
                assembly instructions are available on the project's GitHub repository.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrabRobot;