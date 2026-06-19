'use client';

import Image from 'next/image';
import { Home, FolderKanban, MessageSquare, Briefcase, CheckCircle2, Users } from 'lucide-react';

type NavItem = {
  icon: React.ElementType;
  label: string;
  active?: boolean;
};

const navItems: NavItem[] = [
  { icon: Home, label: 'Home', active: true },
  { icon: FolderKanban, label: 'Projects' },
  { icon: MessageSquare, label: 'Chat' },
];

type Metric = {
  icon: React.ElementType;
  value: string;
  label: string;
  iconBg: string;
  iconColor: string;
};

const metrics: Metric[] = [
  {
    icon: Briefcase,
    value: '24',
    label: 'Active Projects',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: CheckCircle2,
    value: '148',
    label: 'Tasks Completed',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
  },
  {
    icon: Users,
    value: '96%',
    label: 'Client Satisfaction',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
];

function NavLink({ icon: Icon, label, active }: NavItem) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
        active
          ? 'bg-purple-100 text-purple-700'
          : 'text-gray-400 hover:text-gray-600'
      }`}
    >
      <Icon className="w-4 h-4" strokeWidth={2} />
      <span>{label}</span>
    </div>
  );
}

function MetricCard({ icon: Icon, value, label, iconBg, iconColor }: Metric) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-3 md:p-4 shadow-sm flex flex-col items-start text-left min-w-0">
      <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full ${iconBg} flex items-center justify-center mb-2 shrink-0`}>
        <Icon className={`w-3.5 h-3.5 md:w-4 md:h-4 ${iconColor}`} strokeWidth={2.5} />
      </div>
      <p className="text-base md:text-xl font-bold text-gray-900 leading-none">{value}</p>
      <p className="text-[10px] md:text-xs text-gray-500 leading-tight mt-1">{label}</p>
    </div>
  );
}

/** Reusable SVG line chart, no chart library required */
function LineChart() {
  const points = [0, 22, 8, 16, 30, 26, 38, 34];
  const width = 320;
  const height = 80;
  const stepX = width / (points.length - 1);
  const maxY = 40;

  const coords = points.map((p, i) => {
    const x = i * stepX;
    const y = height - (p / maxY) * height;
    return [x, y];
  });

  const pathD = coords
    .map(([x, y], i) => (i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`))
    .join(' ');

  const areaD = `${pathD} L ${width} ${height} L 0 ${height} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-16 sm:h-20"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="lineFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaD} fill="url(#lineFade)" />
      <path
        d={pathD}
        fill="none"
        stroke="#a855f7"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
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
                {/* Sidebar */}
                <div className="flex flex-col gap-3 w-16 sm:w-24 shrink-0">
                  <Image
                    src="/mainLogo.png"
                    alt="PYME Logo"
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg mb-1"
                  />
                  <div className="flex flex-col gap-1">
                    {navItems.map((item) => (
                      <NavLink key={item.label} {...item} />
                    ))}
                  </div>
                </div>

                {/* Main content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 sm:gap-3 mb-5 md:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-300 shrink-0 flex items-center justify-center text-lg">
                      👋
                    </div>
                    <div className="space-y-1 flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg truncate">
                        Good Morning Alex 👋
                      </h3>
                      <p className="text-[10px] sm:text-xs text-gray-500">
                        your business is moving exactly where it should.
                      </p>
                    </div>
                  </div>

                  {/* Metric Cards */}
                  <div className="grid grid-cols-3 gap-2 md:gap-3 mb-6 md:mb-8">
                    {metrics.map((m) => (
                      <MetricCard key={m.label} {...m} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Line Chart */}
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}