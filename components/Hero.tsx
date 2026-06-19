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
                AI CO-FOUNDER FOR BUSINESS
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
          <div className="relative h-auto lg:h-full min-h-[420px] md:min-h-[460px]">
            <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl h-full border border-gray-100">
              {/* Sidebar and Header */}
              <div className="flex gap-3 sm:gap-4 mb-6 md:mb-8">
                <div className="flex flex-col gap-2 w-16 sm:w-20 shrink-0">
                  <Image
                    src="/mainLogo.png"
                    alt="PYME Logo"
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg"
                  />
                  <div className="text-[10px] sm:text-xs text-gray-400 space-y-1">
                    <div>Home</div>
                    <div>Projects</div>
                    <div>Chat</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 sm:gap-3 mb-5 md:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-300 shrink-0" />
                    <div className="space-y-1 flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg truncate">
                        Good Morning Alex 👋
                      </h3>
                      <p className="text-[10px] sm:text-xs text-gray-500">
                        your business is moving exactly where it should.
                      </p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 md:gap-3 mb-6 md:mb-8">
                    {/* Card 1 - Active Projects */}
                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-2.5 sm:p-3 md:p-4 flex flex-col items-center text-center min-w-0">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-purple-300 flex items-center justify-center mb-1.5 md:mb-2 shrink-0">
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900">24</p>
                      <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 leading-tight">
                        Active Projects
                      </p>
                    </div>

                    {/* Card 2 - Tasks Completed */}
                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-2.5 sm:p-3 md:p-4 flex flex-col items-center text-center min-w-0">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-green-400 flex items-center justify-center mb-1.5 md:mb-2 shrink-0">
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900">148</p>
                      <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 leading-tight">
                        Tasks Completed
                      </p>
                    </div>

                    {/* Card 3 - Client Satisfaction */}
                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-2.5 sm:p-3 md:p-4 flex flex-col items-center text-center min-w-0">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-blue-400 flex items-center justify-center mb-1.5 md:mb-2 shrink-0">
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900">96%</p>
                      <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 leading-tight">
                        Client Satisfaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="h-16 sm:h-20 flex items-end justify-around gap-1">
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