import React from 'react';
import { ArrowLeft, Eye, Code, ChevronRight, Brain, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MachineVision() {
  const features = [
    "Real-time Object Detection",
    "6D Pose Estimation",
    "Multi-object Tracking",
    "Depth Map Integration",
    "Custom Neural Network Models",
    "Automated Quality Control"
  ];

  const technicalDetails = [
    "Python with PyTorch Framework",
    "Custom CNN Architecture",
    "OpenCV Integration",
    "CUDA Acceleration",
    "Real-time Processing Pipeline",
    "REST API for System Integration"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-800 text-white">
        <div className="container mx-auto px-6 py-16">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8">
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Eye size={36} />
            Machine Vision System
          </h1>
          <p className="text-xl text-green-100 max-w-2xl">
            An advanced computer vision system leveraging deep learning for real-time
            object detection, tracking, and pose estimation in industrial environments.
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
                <Camera className="text-green-600" />
                Key Features
              </h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <ChevronRight className="text-green-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Brain className="text-green-600" />
                Technical Implementation
              </h2>
              <ul className="space-y-4">
                {technicalDetails.map((detail, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <ChevronRight className="text-green-600 flex-shrink-0" />
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
                src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=800&q=80"
                alt="Machine Vision System"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                <p className="text-gray-600">
                  The Machine Vision System is a state-of-the-art computer vision solution
                  that combines deep learning with traditional computer vision techniques
                  to provide robust object detection, tracking, and quality control in
                  industrial settings. The system processes multiple camera feeds in real-time
                  and provides accurate pose estimation for robotic manipulation tasks.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Neural Network Architecture</h3>
              <p className="text-gray-600 mb-4">
                The system employs a multi-stage neural network pipeline:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Feature Extraction Network</li>
                <li>Object Detection Head</li>
                <li>Pose Estimation Network</li>
                <li>Tracking Algorithm</li>
                <li>Quality Assessment Module</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}