'use client';

import Image from 'next/image';

export default function ProductSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-purple-500 flex items-center justify-center shadow-md">
              <Image
                src="/productLogo.png"
                alt="Product Logo"
                width={50}
                height={50}
                className="w-9 h-9 md:w-11 md:h-11"
              />
            </div>

            {/* Heading */}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Product
            </h3>

            {/* Description Points */}
            <div className="space-y-4 text-gray-700">
              <p>
                Most businesses build what they think people want. Yours will build what the market actually needs.
              </p>
              <p>
                Your AI studies your positioning every week. It tells you where you are strong. Where you are losing ground.
              </p>
              <p>
                And exactly what to build next to pull ahead. You stop guessing. You start leading your market
              </p>
            </div>

            {/* Highlight */}
            <div className="border-l-4 border-cyan-500 pl-4 py-2">
              <p className="text-cyan-600 font-semibold">
                AI guides you from idea to market fit.
              </p>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="bg-gradient-to-br from-cyan-50 via-purple-50 to-cyan-50 rounded-3xl p-8 md:p-12 shadow-xl h-full flex items-center justify-center">
              <Image
                src="/ProductPageRightPic.png"
                alt="Product Analytics"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}