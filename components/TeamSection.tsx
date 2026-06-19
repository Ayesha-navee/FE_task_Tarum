'use client';

import Image from 'next/image';

export default function TeamSection() {
  return (
    <section className="gradient-section">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center">
              <Image
                src="/teamsLogo.png"
                alt="Teams Logo"
                width={50}
                height={50}
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>

            {/* Heading */}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Team
            </h3>

            {/* Description Points */}
            <div className="space-y-4 text-gray-700">
              <p>
                Your team is your biggest asset. Or your biggest risk.
              </p>
              <p>
                Your AI knows which one it is today. Every morning it reads performance. Spots who is falling behind before they fall. Flags who is overloaded before they quit.
              </p>
              <p>
                Tells you who needs a conversation today. You lead people with clarity. Not assumptions.
              </p>
            </div>

            {/* Highlight */}
            <div className="border-l-4 border-cyan-500 pl-4 py-2">
              <p className="text-cyan-600 font-semibold">
                AI makes you the leader your team deserves.
              </p>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="bg-gradient-to-br from-cyan-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl h-full flex items-center justify-center overflow-hidden">
              <Image
                src="/teamsPageRightPic.png"
                alt="Teams Analytics"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
