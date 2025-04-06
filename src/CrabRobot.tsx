import { useState } from 'react';
import CrabRobotImage from './CrabRobot.jpg';
import { ArrowLeft, Code, ChevronRight, Bot, Menu, X, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ListItem {
  id: number;
  text: string;
}

export default function CrabRobot() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<'pdf' | null>(null);

  const handleDocClick = (docType: 'pdf') => {
    setSelectedDoc(docType);
    setIsPanelOpen(true);
  };

  const PDF_VIEWER_URL = "https://drive.google.com/file/d/1boTBK29P0snUa1y_MiZLngZOZ0CqRdsf/preview";
  const VIDEO_URL = "https://drive.google.com/file/d/10wdJabzQQfUxmH5IqwUrYup2_gep76x7/preview";

  const features: ListItem[] = [
    { id: 1, text: "Strandbeest Mechanism Implementation" },
    { id: 2, text: "Dual Stepper Motor Control System" },
    { id: 3, text: "Custom Gait Pattern Generation" },
    { id: 4, text: "Differential Steering Control" },
    { id: 5, text: "PID Speed Regulation" },
    { id: 6, text: "Analog Joystick Interface" },
    { id: 7, text: "Real-time Motion Control" }
  ].map((item, index) => ({ ...item, id: index + 1 }));

  const technicalDetails: ListItem[] = [
    { id: 1, text: "Arduino-based Control System" },
    { id: 2, text: "NEMA17 Stepper Motors with A4988 Drivers" },
    { id: 3, text: "Laser-cut 6mm Acrylic Construction" },
    { id: 4, text: "Custom 5:1 Gear Reduction System" },
    { id: 5, text: "AccelStepper Library Integration" },
    { id: 6, text: "Inverse Kinematics Implementation" },
    { id: 7, text: "CAD Design using Fusion 360" }
  ].map((item, index) => ({ ...item, id: index + 1 }));

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
              Crab Walking Robot
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              The Crab Walking Robot utilizes a Strandbeest mechanism to achieve efficient locomotion. Designed for smooth traversal, it integrates custom gait control and differential steering.
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
                  {features.map((feature) => (
                    <li key={feature.id} className="flex items-center gap-3">
                      <ChevronRight className="text-blue-600 flex-shrink-0" />
                      <span>{feature.text}</span>
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
                  {technicalDetails.map((detail) => (
                    <li key={detail.id} className="flex items-center gap-3">
                      <ChevronRight className="text-blue-600 flex-shrink-0" />
                      <span>{detail.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={CrabRobotImage}
                  alt="Crab Robot Interface"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                  <p className="text-gray-600">
                    This robot employs a Strandbeest mechanism for walking, allowing precise movement with minimal energy consumption. The integration of stepper motors and PID control ensures smooth operation.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Development Process</h3>
                <p className="text-gray-600 mb-4">
                  The robot was developed through iterative prototyping. CAD models were created in Fusion 360, followed by laser cutting of acrylic parts. The control system was designed using Arduino, and various gait patterns were tested before finalizing the optimal configuration.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Mechanism Design & Prototyping</li>
                  <li>Control System Development</li>
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
                    Demonstration of the Crab Walking Robot's movement and control capabilities using the Strandbeest mechanism.
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
              href="https://drive.google.com/file/d/1boTBK29P0snUa1y_MiZLngZOZ0CqRdsf/view"
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