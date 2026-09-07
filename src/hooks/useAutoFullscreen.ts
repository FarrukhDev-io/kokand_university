import { useEffect, useRef } from "react";

export const useAutoFullscreen = () => {
  const hasRequested = useRef(false);

  useEffect(() => {
    // Check if it is a mobile device by screen width or touch capability
    const isMobile = window.innerWidth <= 768 || ('ontouchstart' in window);

    const requestFullScreen = () => {
      if (hasRequested.current || !isMobile) return;

      const docElm = document.documentElement as any;

      try {
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
          docElm.msRequestFullscreen();
        }
        
        hasRequested.current = true;
      } catch (err) {
        console.warn("Fullscreen request failed:", err);
      }
    };

    // Attach to first interaction events
    const events = ["touchstart", "click"];
    
    const handleInteraction = () => {
      requestFullScreen();
      // Remove listeners after first successful or attempted trigger to prevent spam
      events.forEach(evt => document.removeEventListener(evt, handleInteraction));
    };

    if (isMobile) {
      events.forEach(evt => document.addEventListener(evt, handleInteraction, { once: true }));
    }

    return () => {
      events.forEach(evt => document.removeEventListener(evt, handleInteraction));
    };
  }, []);
};
