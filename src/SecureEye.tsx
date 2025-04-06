import React, { useState } from 'react';
import SecureEyeImage from './SecureEye.png';
import { ArrowLeft, Shield, Code, ChevronRight, Bot, Settings, Menu, X, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SecureEye() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<'pdf' | null>(null);

  const handleDocClick = (docType: 'pdf') => {
    setSelectedDoc(docType);
    setIsPanelOpen(true);
  };

  const PDF_VIEWER_URL = "https://drive.google.com/file/d/1FPMJUyooMX7U7ubMiwWAKiSNiS0Dag3k/preview";

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
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8 relative">
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

      {/* Floating Menu Button */}
      <button
        onClick={() => setIsPanelOpen(true)}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-4 rounded-l-lg shadow-lg hover:bg-blue-700 transition-all"
      >
        <Menu size={24} />
      </button>

      {/* Slide-out Panel */}
      <div className={`fixed right-0 top-0 h-full w-[90vw] md:w-[70vw] lg:w-[60vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isPanelOpen ? 'translate-x-0' : 'translate-x-full'} overflow-hidden flex flex-col`}>
        {/* Panel Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-blue-600 text-white">
          <h2 className="text-2xl font-bold">Project Documents</h2>
          <button
            onClick={() => {
              setIsPanelOpen(false);
              setSelectedDoc(null);
            }}
            className="p-2 hover:bg-blue-700 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Panel Content */}
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-64 border-r border-gray-200 p-4 bg-gray-50">
            <div 
              className={`p-4 rounded-lg mb-4 cursor-pointer transition-all ${selectedDoc === 'pdf' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
              onClick={() => handleDocClick('pdf')}
            >
              <h3 className="font-semibold">Project Report</h3>
              <p className="text-sm text-gray-600">Technical documentation and results</p>
            </div>
          </div>

          {/* Document Viewer */}
          <div className="flex-1 h-full bg-gray-50">
            {selectedDoc === 'pdf' && (
              <iframe
                src={PDF_VIEWER_URL}
                className="w-full h-full border-0"
                title="PDF Viewer"
                allow="autoplay"
              />
            )}
            {!selectedDoc && (
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="text-center">
                  <p className="mb-2">Select a document from the sidebar</p>
                  <p className="text-sm text-gray-400">Documents will open in the viewer</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Add a fallback in case the viewer fails */}
        <div className="absolute bottom-4 right-4">
          {selectedDoc && (
            <a 
              href="https://drive.google.com/file/d/1FPMJUyooMX7U7ubMiwWAKiSNiS0Dag3k/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              Open in new tab
              <ArrowRight size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
