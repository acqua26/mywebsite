import { useState } from 'react';
import AnimatronicEyeImage from './AnimatronicEye.png';
import { ArrowLeft, Code, ChevronRight, Bot, Menu, X, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const VIDEO_URL = "https://drive.google.com/file/d/1aaZpdPm4FmB-14pamemxsggoQSwXooo-/preview";

export default function AnimatronicEye() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<'pdf' | null>(null);

  const handleDocClick = (docType: 'pdf'): void => {
    setSelectedDoc(docType);
    setIsPanelOpen(true);
  };

  const features = [
    "Dual-axis eyeball movement for horizontal and vertical tracking",
    "Realistic eyelid motion synchronized with eyeball position",
    "Real-time gaze tracking using camera input or joystick control",
    "Compact mechanical design with 3D-printed components",
    "Microcontroller-based control logic (Arduino or similar)",
    "Modular setup for integration into humanoid robots or exhibits"
  ];

  const technicalDetails = [
    "Actuation: Servo motors",
    "Control System: Arduino Uno/Nano with PWM-based servo control",
    "Gaze input via IR camera, joystick, or programmed behavior",
    "CAD modeling and 3D printing for mechanical components",
    "Power supply with regulated 5V for stable servo performance",
    "Custom firmware for smooth and coordinated motion"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-6 py-16">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8">
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
            <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
              Animatronic Eye System
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Designed and implemented an animatronic eye mechanism with servo-based actuation and real-time gaze tracking for interactive robotics applications.
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
                  src={AnimatronicEyeImage}
                  alt="Animatronic Eye System"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                  <p className="text-gray-600">
                    Developed a functional animatronic eye system capable of mimicking human eye movement using servo motors and microcontroller integration. Enabled synchronized eyelid and eyeball motion for lifelike expression and responsiveness. Focused on real-time tracking and interactive control for entertainment and HRI (Human-Robot Interaction) use cases.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Development Process</h3>
                <p className="text-gray-600 mb-4">
                  The project involved iterative design and testing of mechanical components, servo control algorithms, and integration of various input methods. 3D printing enabled rapid prototyping of different eye mechanisms until achieving the desired motion quality and reliability.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Mechanical Design & 3D Printing</li>
                  <li>Servo Control System Development</li>
                  <li>Motion Algorithm Implementation</li>
                  <li>Input System Integration</li>
                </ol>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <h3 className="text-xl font-bold p-6 pb-4">Project Demo</h3>
                <div className="aspect-video w-full">
                  <iframe
                    src={VIDEO_URL}
                    allow="autoplay"
                    className="w-full h-full border-0"
                    title="Project Demo Video"
                  />
                </div>
                <div className="p-6 pt-4">
                  <p className="text-gray-600">
                    Demonstration of the animatronic eye system showing real-time gaze tracking and synchronized eyelid movement.
                  </p>
                </div>
              </div>
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
                src="YOUR_PDF_VIEWER_URL_HERE"
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
      </div>
    </div>
  );
} 