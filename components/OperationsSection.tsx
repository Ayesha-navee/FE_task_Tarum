'use client';

import Image from 'next/image';

export default function OperationsSection() {
  return (
    <section className="bg-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content - Illustration */}
          <div className="relative h-96 md:h-full min-h-96 order-2 lg:order-1">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl h-full flex items-center justify-center overflow-hidden">
              <Image
                src="/operationsPageLeftPic.png"
                alt="Operations Workflow"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            {/* Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-500 flex items-center justify-center shadow-md">
              <Image
                src="/operationsLogo.png"
                alt="Operations Logo"
                width={50}
                height={50}
                className="w-9 h-9 md:w-11 md:h-11"
              />
            </div>

            {/* Heading */}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Operations
            </h3>

            {/* Description Points */}
            <div className="space-y-4 text-gray-700">
              <p>
                A business that cannot run without you is not a business. It is a job.
              </p>
              <p>
                Your AI maps every workflow. Finds every bottleneck. Automates what should not need you. And builds systems that run while you sleep.
              </p>
              <p>
                The result is a business that executes with or without you in the room.
              </p>
            </div>

            {/* Highlight */}
            <div className="border-l-4 border-cyan-500 pl-4 py-2">
              <p className="text-cyan-600 font-semibold">
                AI turns your chaos into a machine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}