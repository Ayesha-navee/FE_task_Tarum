'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="container-custom px-4 md:px-8 lg:px-16 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full w-fit">
              <span className="text-cyan-600 text-xs md:text-sm font-bold tracking-wide">
                🚀 AI CO-FOUNDER FOR BUSINESS
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                The Best Investment
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                You Will Make In Your
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Business.
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              A system that grows with you. Learns your business every day. Builds your future while you run your present.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-6">
              <button className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:shadow-lg transition-all duration-300">
                Request a Demo →
              </button>
              <button className="px-8 py-3 rounded-full font-semibold border-2 border-cyan-400 text-cyan-600 hover:bg-cyan-50 transition-all duration-300">
                Explore Departments →
              </button>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl h-full border border-gray-100">
              {/* Sidebar and Header */}
              <div className="flex gap-4 mb-8">
                <div className="flex flex-col gap-2 w-20">
                  <Image
                    src="/mainLogo.png"
                    alt="PYME Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-lg"
                  />
                  <div className="text-xs text-gray-400 space-y-1">
                    <div>Home</div>
                    <div>Projects</div>
                    <div>Chat</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-purple-300" />
                    <div className="space-y-1 flex-1">
                      <h3 className="font-bold text-gray-900 text-lg">Good Morning Alex 👋</h3>
                      <p className="text-xs text-gray-500">your business is moving exactly where it should.</p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full bg-purple-300 mx-auto mb-2" />
                      <p className="text-lg font-bold text-gray-900">24</p>
                      <p className="text-xs text-gray-500">Active Projects</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full bg-green-400 mx-auto mb-2" />
                      <p className="text-lg font-bold text-gray-900">148</p>
                      <p className="text-xs text-gray-500">Tasks Completed</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full bg-blue-400 mx-auto mb-2" />
                      <p className="text-lg font-bold text-gray-900">96%</p>
                      <p className="text-xs text-gray-500">Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="h-20 flex items-end justify-around gap-1">
                <div className="flex-1 h-1/3 bg-gradient-to-t from-purple-500 to-purple-400 rounded-sm" />
                <div className="flex-1 h-2/3 bg-gradient-to-t from-purple-500 to-purple-400 rounded-sm" />
                <div className="flex-1 h-1/2 bg-gradient-to-t from-purple-500 to-purple-400 rounded-sm" />
                <div className="flex-1 h-3/4 bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-sm" />
                <div className="flex-1 h-2/5 bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
