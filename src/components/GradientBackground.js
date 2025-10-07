import React from 'react';
import './GradientBackground.css';

const GradientBackground = ({ opacity = 1 }) => {
  return (
    <div className="gradient-background" style={{ opacity }}>
      {/* Planetary Horizon Gradient - from the left, matching circle colors */}
      <div 
        className="gradient-layer"
        style={{
          background: `radial-gradient(ellipse 140% 100% at 0% 130%, 
            rgba(6, 182, 212, 0.6) 0%,
            rgba(14, 165, 233, 0.5) 10%,
            rgba(59, 130, 246, 0.4) 25%,
            rgba(79, 70, 229, 0.35) 40%,
            rgba(99, 102, 241, 0.3) 50%,
            rgba(124, 58, 237, 0.25) 60%,
            rgba(45, 27, 105, 0.8) 75%,
            rgba(10, 5, 30, 0.9) 85%,
            rgba(0, 0, 0, 1) 100%)`
        }}
      />

      {/* Grain Texture Overlay */}
      <div 
        className="grain-texture"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
      />

      {/* Additional atmospheric layer */}
      <div 
        className="atmospheric-layer"
        style={{
          background: `linear-gradient(to top, 
            rgba(6, 182, 212, 0.3) 0%, 
            rgba(59, 130, 246, 0.2) 15%, 
            transparent 40%)`
        }}
      />
    </div>
  );
};

export default GradientBackground;
