import React from "react";

const Loader: React.FC = () => (
  <div className="flex flex-col items-center justify-center w-full h-screen">
    <div className="relative mb-6">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#fe0f5d66] via-[#fe0f5d22] to-transparent animate-pulse blur-2xl opacity-80"></div>
      </div>
      <div className="w-14 h-14 border-4 border-[#fe0f5d] border-t-transparent rounded-full animate-spin shadow-[0_0_32px_0_#fe0f5d55] z-10 relative" />
      <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#fe0f5d] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_2px_#fe0f5d88]" />
    </div>
    <span className="text-white text-lg font-semibold tracking-wide animate-pulse">
      Loading portfolio<span className="inline-block animate-bounce">...</span>
    </span>
  </div>
);

export default Loader;