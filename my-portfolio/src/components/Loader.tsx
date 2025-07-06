import React from "react";

const Loader: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full w-full">
    <div className="w-16 h-16 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin shadow-xl glass mb-4" style={{ boxShadow: '0 0 32px 8px rgba(99,102,241,0.18)' }} />
    <span className="text-indigo-200 glowy-text text-lg font-semibold mt-2">Loading...</span>
  </div>
);

export default Loader; 