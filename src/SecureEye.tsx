import React from 'react';
import SecureEyeImage from './SecureEye.png';
import { ArrowLeft, Shield, Code, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SecureEye() {
  const features = [
    "Real-time Motion Detection",
    "Remote Image Upload to AWS EC2",
    "Web Interface for Monitoring",
    "Timestamp Recording",
    "Configurable Sensitivity",
    "Multiple Hardware Support",
    "Secure File Transfer"
  ];

  const technicalDetails = [
    "Python with OpenCV for Motion Detection",
    "Node.js Express Backend",
    "AWS EC2 Cloud Storage",
    "Raspberry Pi & Pi Camera Module",
    "SFTP Protocol Implementation",
    "RESTful API Integration"
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
            <Shield size={36} />
            SecureEye: Security Surveillance
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            An IoT-based security system using Raspberry Pi with motion detection and web interface for remote monitoring, featuring real-time alerts and cloud storage integration.
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
                <Code size={24} className="text-blue-600" />
                Key Features
              </h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <ChevronRight size={16} className="text-blue-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
              <ul className="space-y-4">
                {technicalDetails.map((detail, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <ChevronRight size={16} className="text-blue-600" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <img 
              src={SecureEyeImage} 
              alt="SecureEye System Interface" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Project Overview</h3>
              <p className="text-gray-600 mb-4">
                SecureEye is an innovative IoT security solution that combines motion detection capabilities with cloud storage and remote monitoring. The system utilizes a Raspberry Pi equipped with a camera module to detect motion and capture images, which are then securely uploaded to an AWS EC2 server for remote access.
              </p>
              <p className="text-gray-600">
                The project demonstrates the practical application of IoT technologies in security systems, featuring real-time monitoring, efficient data transfer, and a user-friendly web interface for reviewing captured events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
