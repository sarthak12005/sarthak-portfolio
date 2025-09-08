// Enhanced smooth scroll utility for better browser compatibility
export const smoothScrollTo = (targetId, offset = 80) => {
  const target = document.querySelector(targetId);
  if (!target) {
    console.warn(`Smooth scroll target not found: ${targetId}`);
    return;
  }

  const targetPosition = target.offsetTop - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = Math.abs(distance) > 1000 ? 1000 : Math.abs(distance) * 0.5; // Dynamic duration
  let start = null;

  // console.log(`Smooth scrolling to ${targetId}, distance: ${distance}px, duration: ${duration}ms`);

  // Easing function for smooth animation
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  const animation = (currentTime) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);
    
    window.scrollTo(0, startPosition + distance * ease);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  // Try native smooth scroll first, fallback to custom animation
  if ('scrollBehavior' in document.documentElement.style) {
    try {
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    } catch {
      // Fallback to custom animation
      requestAnimationFrame(animation);
    }
  } else {
    // Custom animation for older browsers
    requestAnimationFrame(animation);
  }
};

// Hook for smooth scrolling
export const useSmoothScroll = () => {
  const scrollToSection = (targetId) => {
    smoothScrollTo(targetId);
  };

  return { scrollToSection };
};
