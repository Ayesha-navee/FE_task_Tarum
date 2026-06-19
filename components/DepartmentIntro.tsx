'use client';

export default function DepartmentIntro() {
  return (
    <section className="gradient-section">
      <div className="container-custom section-padding">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-purple-500">Your AI Builds Your Business.</span>
            <br />
            <span className="text-cyan-500">Department By Department.</span>
          </h2>

          {/* Description */}
          <div className="space-y-4 text-gray-600">
            <p className="text-base md:text-lg">
              This is not a tool you buy today and forget tomorrow.
            </p>
            <p className="text-base md:text-lg">
              This is a system that works backward from where you want to be. Builds the path forward. And gets more valuable every single day you use it.
            </p>
            <p className="text-lg md:text-xl font-semibold text-cyan-600 pt-4">
              The best founders do not work harder. They see clearer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
