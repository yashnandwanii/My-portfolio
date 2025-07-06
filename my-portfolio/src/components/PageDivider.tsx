import React from "react";

const PageDivider: React.FC = () => (
  <div className="w-full flex justify-center">
    <div
      style={{
        width: '100%',
        height: 4,
        border: 'none',
        background: 'linear-gradient(90deg, #6366f1 0%, #a855f7 100%)',
        boxShadow: '0 2px 16px 0 rgba(99,102,241,0.18)',
        borderRadius: 8,
        marginBottom: 40
      }}
    />
  </div>
);

export default PageDivider; 