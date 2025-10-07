import React, { useState, useEffect, useRef } from 'react';
import './OrbitalBackground.css';

const OrbitalBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef(null);
  const timeRef = useRef(0);
  const animationRef = useRef(null);
  const grainCanvasRef = useRef(null);
  const lastOpacityRef = useRef(1);
  const loadTimeRef = useRef(0);
  const hasLoadedRef = useRef(false);

  // Easing function for smooth transitions
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Create grain texture once for better performance
    if (!grainCanvasRef.current) {
      const grainCanvas = document.createElement('canvas');
      grainCanvas.width = 512;
      grainCanvas.height = 512;
      const grainCtx = grainCanvas.getContext('2d');
      
      const imageData = grainCtx.createImageData(512, 512);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const grain = Math.random() * 60 - 30;
        data[i] = grain > 0 ? 255 : 0;
        data[i + 1] = grain > 0 ? 255 : 0;
        data[i + 2] = grain > 0 ? 255 : 0;
        data[i + 3] = Math.abs(grain) * 2;
      }
      
      grainCtx.putImageData(imageData, 0, 0);
      grainCanvasRef.current = grainCanvas;
    }
    
    const ctx = canvas.getContext('2d', { 
      alpha: false,
      desynchronized: true
    });
    const w = canvas.width = window.innerWidth;
    const h = canvas.height = window.innerHeight;
    
    const centerX = w / 2;
    const centerY = h / 2;
    
    const animate = () => {
      const time = timeRef.current;
      
      ctx.clearRect(0, 0, w, h);
    
    // Calculate scroll progress (0 to 1, fully enlarged at 30% page scroll)
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = Math.min((scrollY / maxScroll) * (1 / 0.3), 1); // Reaches 1 at 30% scroll
    
    // Start at 350 and grow to FILL ENTIRE SCREEN at 30% scroll
    // Use diagonal to ensure full coverage
    const targetRadius = Math.sqrt(w * w + h * h) / 2; // Covers entire viewport diagonally
    const baseRadius = 350 + (scrollProgress * (targetRadius - 350));
    
    // Fade logic: Circle fades by end of section 2, orbital rings fade in at section 3
    // Section 1 (Hero): 0-25%, Section 2 (About): 25-50%, Section 3 (Services): 50-75%
    // Extended ranges for smoother, more gradual transitions
    let canvasOpacity = 1;
    let showCircle = true; // Control whether to draw the circle
    const totalScrollProgress = scrollY / maxScroll; // 0 to 1 for entire page
    
    if (totalScrollProgress <= 0.38) {
      // Circle fully visible through section 1 and early section 2
      canvasOpacity = 1;
      showCircle = true;
    } else if (totalScrollProgress > 0.38 && totalScrollProgress < 0.52) {
      // Smooth fade out over extended range (end of section 2)
      const fadeOutProgress = (totalScrollProgress - 0.38) / 0.14; // 14% range for smooth fade
      canvasOpacity = 1 - easeInOutCubic(fadeOutProgress);
      showCircle = true; // Keep drawing circle during fade
    } else if (totalScrollProgress >= 0.52 && totalScrollProgress < 0.58) {
      // Brief pure black moment (early section 3)
      canvasOpacity = 0;
      showCircle = false;
    } else if (totalScrollProgress >= 0.58 && totalScrollProgress < 0.72) {
      // Smooth fade in of orbital rings over extended range (section 3)
      const fadeInProgress = (totalScrollProgress - 0.58) / 0.14; // 14% range for smooth fade
      canvasOpacity = easeInOutCubic(fadeInProgress);
      showCircle = false; // Only show orbital rings, not the filled circle
    } else if (totalScrollProgress >= 0.72) {
      // Orbital rings fully visible
      canvasOpacity = 1;
      showCircle = false;
    }
    
    // Elastic bounce easing for orbital rings (more noticeable bounce)
    const easeOutElastic = (t) => {
      const c4 = (2 * Math.PI) / 50; // More noticeable bounce
      return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -6 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
    };
    
    // Initial load animation
    let circleLoadOpacity = 1;
    let orbitalScaleMultipliers = [1, 1, 1, 1]; // Individual scales for each ring
    
    if (!hasLoadedRef.current) {
      loadTimeRef.current += 0.016; // Approximate 60fps
      
      // Phase 1: Circle fades in (0-0.6s) - faster
      if (loadTimeRef.current < 0.6) {
        circleLoadOpacity = easeInOutCubic(loadTimeRef.current / 0.6);
        orbitalScaleMultipliers = [3, 3, 3, 3]; // Orbitals start even closer
      }
      // Phase 2: Orbital rings bounce in at different speeds (0.6-1.5s) - faster
      else if (loadTimeRef.current < 1.5) {
        circleLoadOpacity = 1;
        
        // Each ring has different timing for staggered effect - very tight timing
        const ringTimings = [
          { start: 0.6, duration: 0.5 },  // Ring 1: fastest
          { start: 0.65, duration: 0.55 }, // Ring 2: slightly delayed
          { start: 0.7, duration: 0.6 },  // Ring 3: more delayed
          { start: 0.75, duration: 0.65 }  // Ring 4: slowest
        ];
        
        orbitalScaleMultipliers = ringTimings.map((timing, index) => {
          if (loadTimeRef.current < timing.start) {
            return 3; // Not started yet
          } else if (loadTimeRef.current < timing.start + timing.duration) {
            const progress = (loadTimeRef.current - timing.start) / timing.duration;
            return 3 - (2 * easeOutElastic(progress)); // 3 -> 1 with very subtle bounce
          } else {
            return 1; // Animation complete
          }
        });
      }
      // Phase 3: Animation complete
      else {
        hasLoadedRef.current = true;
        circleLoadOpacity = 1;
        orbitalScaleMultipliers = [1, 1, 1, 1];
      }
    }
    
    // Smooth opacity interpolation (LERP) for buttery smooth transitions
    const opacityDiff = Math.abs(canvasOpacity - lastOpacityRef.current);
    if (opacityDiff > 0.005) {
      // Lerp (linear interpolation) for micro-smoothing
      canvasOpacity = lastOpacityRef.current + (canvasOpacity - lastOpacityRef.current) * 0.2;
      lastOpacityRef.current = canvasOpacity;
    } else {
      lastOpacityRef.current = canvasOpacity;
    }
    
    // Apply global opacity to entire canvas - this is the key to smooth fading!
    // Combine scroll-based opacity with load animation
    ctx.globalAlpha = canvasOpacity * circleLoadOpacity;
    
    // Only draw the filled circle if showCircle is true
    if (showCircle && canvasOpacity > 0) {
      // Draw circle with dynamic watercolor planet effect
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius, 0, Math.PI * 2);
      ctx.clip();
      
      // Fill with vibrant base color matching gradient theme
      const baseGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, baseRadius);
      baseGradient.addColorStop(0, 'rgba(10, 5, 30, 1)'); // Very dark purple/black
      baseGradient.addColorStop(1, 'rgba(0, 0, 0, 1)'); // Pure black at edges (matches horizon)
      ctx.fillStyle = baseGradient;
      ctx.fillRect(centerX - baseRadius, centerY - baseRadius, baseRadius * 2, baseRadius * 2);
      
      // Color palette - matching gradient background (cyan to purple theme)
      const colors = [
        { r: 6, g: 182, b: 212 },     // Cyan
        { r: 14, g: 165, b: 233 },    // Light blue
        { r: 59, g: 130, b: 246 },    // Blue
        { r: 79, g: 70, b: 229 },     // Indigo
        { r: 99, g: 102, b: 241 },    // Blue-violet
        { r: 124, g: 58, b: 237 },    // Purple
        { r: 109, g: 40, b: 217 },    // Deep purple
        { r: 88, g: 28, b: 135 }      // Dark purple
      ];
    
      // Optimized: Reduced to 8 blobs for better performance
      const blobCount = 8;
    
    for (let b = 0; b < blobCount; b++) {
      const angle = (b / blobCount) * Math.PI * 2 + time * 0.1; // Slowed from 0.3 to 0.1
      const distance = Math.sin(time * 0.15 + b) * baseRadius * 0.5; // Slowed from 0.4 to 0.15
      
      const offsetX = Math.cos(angle) * distance + Math.sin(time * 0.2 + b * 1.3) * 50; // Slowed from 0.6 to 0.2
      const offsetY = Math.sin(angle) * distance + Math.cos(time * 0.18 + b * 1.7) * 50; // Slowed from 0.5 to 0.18
      
      const blobRadius = baseRadius * 0.9;
      
      const colorIndex = b % colors.length;
      const color = colors[colorIndex];
      const nextColor = colors[(colorIndex + 1) % colors.length];
      
      const gradient = ctx.createRadialGradient(
        centerX + offsetX, 
        centerY + offsetY, 
        0,
        centerX + offsetX, 
        centerY + offsetY, 
        blobRadius
      );
      
      const opacity = 0.75;
      const mixRatio = (Math.sin(time * 0.35 + b * 0.5) + 1) / 2; // Slowed color mixing from 1.0 to 0.35
      
      const mixR = Math.floor(color.r * (1 - mixRatio) + nextColor.r * mixRatio);
      const mixG = Math.floor(color.g * (1 - mixRatio) + nextColor.g * mixRatio);
      const mixB = Math.floor(color.b * (1 - mixRatio) + nextColor.b * mixRatio);
      
      gradient.addColorStop(0, `rgba(${mixR}, ${mixG}, ${mixB}, ${opacity})`);
      gradient.addColorStop(0.6, `rgba(${mixR}, ${mixG}, ${mixB}, ${opacity * 0.5})`);
      gradient.addColorStop(1, `rgba(${mixR}, ${mixG}, ${mixB}, 0)`);
      
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = gradient;
      ctx.fillRect(centerX - baseRadius, centerY - baseRadius, baseRadius * 2, baseRadius * 2);
    }
    
    ctx.globalCompositeOperation = 'source-over';
    
    // Apply pre-generated grain texture with offset for animation (optimized)
    // Multiply grain opacity with canvas opacity for smooth fade
    ctx.globalAlpha = canvasOpacity * 0.15;
    const grainOffset = (time * 3) % 512; // Slowed grain movement from 10 to 3
    ctx.drawImage(
      grainCanvasRef.current,
      centerX - baseRadius - grainOffset,
      centerY - baseRadius - grainOffset,
      baseRadius * 2 + 512,
      baseRadius * 2 + 512
    );
    
    // Reset for next frame
    ctx.globalAlpha = canvasOpacity;
    
    ctx.restore();
    
    // Draw orbital circles around the circle (visible in sections 1-2)
    const orbitalCircles = [
      { radius: 300, opacity: 0.4 },
      { radius: 400, opacity: 0.35 },
      { radius: 520, opacity: 0.3 },
      { radius: 660, opacity: 0.25 }
    ];
    
    orbitalCircles.forEach((orbit, index) => {
      // Apply individual load animation scale to each orbital ring
      const animatedRadius = orbit.radius * orbitalScaleMultipliers[index];
      const currentRadius = animatedRadius - (scrollProgress * (animatedRadius - baseRadius));
      
      if (currentRadius > baseRadius + 10) {
        // Create gradient for orbital ring
        const gradient = ctx.createLinearGradient(
          centerX - currentRadius, centerY,
          centerX + currentRadius, centerY
        );
        gradient.addColorStop(0, `rgba(6, 182, 212, ${orbit.opacity})`); // Cyan
        gradient.addColorStop(0.5, `rgba(124, 58, 237, ${orbit.opacity})`); // Purple
        gradient.addColorStop(1, `rgba(6, 182, 212, ${orbit.opacity})`); // Cyan
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(centerX, centerY, currentRadius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Draw orbiting circles on each ring at different positions
        // Each ring has different number of orbiters and speeds
        const orbiterConfigs = [
          { count: 1, speed: 0.3, size: 4, startOffset: 0 },      // Ring 1: 1 orbiter
          { count: 2, speed: 0.2, size: 3.5, startOffset: Math.PI }, // Ring 2: 2 orbiters
          { count: 1, speed: 0.15, size: 3, startOffset: Math.PI / 2 }, // Ring 3: 1 orbiter
          { count: 3, speed: 0.25, size: 3.5, startOffset: 0 }    // Ring 4: 3 orbiters
        ];
        
        const config = orbiterConfigs[index];
        
        for (let i = 0; i < config.count; i++) {
          const angleOffset = (i / config.count) * Math.PI * 2;
          const angle = time * config.speed + angleOffset + config.startOffset;
          
          const orbiterX = centerX + Math.cos(angle) * currentRadius;
          const orbiterY = centerY + Math.sin(angle) * currentRadius;
          
          // Draw glowing orbiter circle
          const orbiterGradient = ctx.createRadialGradient(
            orbiterX, orbiterY, 0,
            orbiterX, orbiterY, config.size * 2
          );
          orbiterGradient.addColorStop(0, 'rgba(6, 182, 212, 1)'); // Bright cyan core
          orbiterGradient.addColorStop(0.5, 'rgba(124, 58, 237, 0.8)'); // Purple middle
          orbiterGradient.addColorStop(1, 'rgba(124, 58, 237, 0)'); // Fade out
          
          ctx.fillStyle = orbiterGradient;
          ctx.beginPath();
          ctx.arc(orbiterX, orbiterY, config.size * 2, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw solid center
          ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
          ctx.beginPath();
          ctx.arc(orbiterX, orbiterY, config.size * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    });
    
    // Draw fine lines connecting from blob edge to outer circles (optimized to 40)
    const connectionLines = 40;
    const maxOrbit = 660 - (scrollProgress * (660 - baseRadius));
    
    for (let i = 0; i < connectionLines; i++) {
      const angle = (i / connectionLines) * Math.PI * 2;
      
      // Alternate between cyan and purple tints
      const colorMix = (i % 2 === 0) ? 'rgba(6, 182, 212, 0.15)' : 'rgba(124, 58, 237, 0.15)';
      ctx.strokeStyle = colorMix;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(
        centerX + Math.cos(angle) * baseRadius,
        centerY + Math.sin(angle) * baseRadius
      );
      ctx.lineTo(
        centerX + Math.cos(angle) * maxOrbit,
        centerY + Math.sin(angle) * maxOrbit
      );
      ctx.stroke();
    }
    } // End of showCircle block
    
    // Don't draw orbital rings with the horizon - they only appear with the circle!
    // Orbital rings are part of the circle phase, not the gradient phase
    
    timeRef.current += 0.03; // Original speed maintained
    animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [scrollY]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="orbital-background">
      <canvas
        ref={canvasRef}
        className="orbital-canvas"
      />
    </div>
  );
};

export default OrbitalBackground;
