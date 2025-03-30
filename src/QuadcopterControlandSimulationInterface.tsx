import { useState } from 'react';
import QuadcopterImage from './Quadcopter.png';
import { ArrowLeft, Notebook as Robot, Code, ChevronRight, Settings, Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuadcopterControlandSimulationInterface() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<'pdf' | 'ppt' | null>(null);

  const handleDocClick = (docType: 'pdf' | 'ppt') => {
    setSelectedDoc(docType);
    setIsPanelOpen(true);
  };

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

  const isDevelopment = import.meta.env.DEV;

  const PDF_VIEWER_URL = "https://drive.google.com/file/d/14nwWO_AAoQxHZqnaR0juQBuZiQQDnBHI/preview";
  const PPT_VIEWER_URL = "https://drive.google.com/file/d/12_Mx06iKZgQWNu_NNmbz_XpHKNm9x-fd/preview";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8 relative">
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

      {/* Floating Menu Button */}
      <button
        onClick={() => setIsPanelOpen(true)}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-4 rounded-l-lg shadow-lg hover:bg-purple-700 transition-all"
      >
        <Menu size={24} />
      </button>

      {/* Slide-out Panel */}
      <div className={`fixed right-0 top-0 h-full w-[90vw] md:w-[70vw] lg:w-[60vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isPanelOpen ? 'translate-x-0' : 'translate-x-full'} overflow-hidden flex flex-col`}>
        {/* Panel Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-purple-600 text-white">
          <h2 className="text-2xl font-bold">Project Documents</h2>
          <button
            onClick={() => {
              setIsPanelOpen(false);
              setSelectedDoc(null);
            }}
            className="p-2 hover:bg-purple-700 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Panel Content */}
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-64 border-r border-gray-200 p-4 bg-gray-50">
            <div 
              className={`p-4 rounded-lg mb-4 cursor-pointer transition-all ${selectedDoc === 'pdf' ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'}`}
              onClick={() => handleDocClick('pdf')}
            >
              <h3 className="font-semibold">Project Report</h3>
              <p className="text-sm text-gray-600">Technical documentation and results</p>
            </div>
            <div 
              className={`p-4 rounded-lg cursor-pointer transition-all ${selectedDoc === 'ppt' ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'}`}
              onClick={() => handleDocClick('ppt')}
            >
              <h3 className="font-semibold">Presentation</h3>
              <p className="text-sm text-gray-600">Project overview slides</p>
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
            {selectedDoc === 'ppt' && (
              <iframe
                src={PPT_VIEWER_URL}
                className="w-full h-full border-0"
                title="PPT Viewer"
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
              href={selectedDoc === 'pdf' 
                ? "https://drive.google.com/file/d/14nwWO_AAoQxHZqnaR0juQBuZiQQDnBHI/view"
                : "https://docs.google.com/presentation/d/12_Mx06iKZgQWNu_NNmbz_XpHKNm9x-fd/edit?usp=sharing"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors inline-flex items-center gap-2"
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