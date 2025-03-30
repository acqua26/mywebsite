import CrabRobotImage from './CrabRobot.jpg';
import { ArrowLeft, Code, ChevronRight, Bot, FileText, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CrabRobot() {
  const features = [
    "Strandbeest Mechanism Implementation",
    "Dual Stepper Motor Control System",
    "Custom Gait Pattern Generation",
    "Differential Steering Control",
    "PID Speed Regulation",
    "Analog Joystick Interface",
    "Real-time Motion Control"
  ];

  const technicalDetails = [
    "Arduino-based Control System",
    "NEMA17 Stepper Motors with A4988 Drivers",
    "Laser-cut 6mm Acrylic Construction",
    "Custom 5:1 Gear Reduction System",
    "AccelStepper Library Integration",
    "Inverse Kinematics Implementation",
    "CAD Design using Fusion 360"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
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

              <div className="lg:sticky lg:top-8">
                <div className="space-y-8">
                  <img
                    src="/crabrobot-detail.jpg"
                    alt="Crab Robot"
                    className="w-full rounded-lg shadow-lg"
                  />
                  
                  {/* Add Video Section */}
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Play className="text-blue-600" />
                      Project Demo
                    </h3>
                    <video 
                      controls 
                      className="w-full rounded-lg"
                      poster="/crabrobot-thumbnail.jpg"
                    >
                      <source src="/crabrobot-demo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {/* Add PDF Section */}
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FileText className="text-blue-600" />
                      Documentation
                    </h3>
                    <a
                      href={`${import.meta.env.BASE_URL}Team 08 MAE506 Final Project Report.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gray-100 text-gray-700 text-center py-3 rounded-md hover:bg-gray-200 transition duration-150 mb-4"
                    >
                      View PDF Documentation
                    </a>
                    <a
                      href="https://github.com/yourusername/crabrobot"
                      className="block w-full bg-blue-600 text-white text-center py-3 rounded-md hover:bg-blue-700 transition duration-150"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}