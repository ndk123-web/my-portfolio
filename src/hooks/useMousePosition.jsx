import { useState, useEffect, useRef, useCallback } from "react";

// Custom hook for tracking mouse position with advanced features
export const useMousePosition = (options = {}) => {
  // Destructure options with defaults
  const {
    includeTouch = true, // Should we track touch events too?
    transform = true, // Should we calculate transform values?
    throttleMs = 16, // Throttle updates (60fps = 16ms)
    resetOnLeave = false, // Reset position when mouse leaves window?
    resetDelay = 200, // Delay before resetting position
  } = options;

  // State for mouse position
  const [mousePosition, setMousePosition] = useState({
    x: 0, // Current X coordinate
    y: 0, // Current Y coordinate
    elementX: 0, // X relative to element (for hover effects)
    elementY: 0, // Y relative to element (for hover effects)
    elementPositionX: 0, // Element's position on page
    elementPositionY: 0, // Element's position on page
  });

  // State for transform calculations (used for 3D effects)
  const [transformValues, setTransformValues] = useState({
    tiltX: 0, // X-axis tilt for 3D effects (-20 to 20)
    tiltY: 0, // Y-axis tilt for 3D effects (-20 to 20)
    mouseXPercentage: 0, // Mouse X as percentage (0-100)
    mouseYPercentage: 0, // Mouse Y as percentage (0-100)
    distance: 0, // Distance from center
    angle: 0, // Angle from center (in degrees)
  });

  // Refs for performance optimization
  const frameRef = useRef();
  const resetTimeoutRef = useRef();
  const lastUpdateRef = useRef(0);

  // Calculate transform values based on mouse position
  const calculateTransforms = useCallback(
    (x, y, elementRect) => {
      if (!transform || !elementRect) return;

      const centerX = elementRect.left + elementRect.width / 2;
      const centerY = elementRect.top + elementRect.height / 2;

      // Calculate relative position (-1 to 1)
      const relativeX = (x - centerX) / (elementRect.width / 2);
      const relativeY = (y - centerY) / (elementRect.height / 2);

      // Calculate tilt values (for 3D card effects)
      const tiltX = relativeY * 20; // Max 20 degrees tilt
      const tiltY = relativeX * -20; // Negative for natural feel

      // Calculate distance from center
      const distance = Math.sqrt(relativeX * relativeX + relativeY * relativeY);

      // Calculate angle (for circular effects)
      const angle = Math.atan2(relativeY, relativeX) * (180 / Math.PI);

      // Calculate percentage values
      const mouseXPercentage =
        ((x - elementRect.left) / elementRect.width) * 100;
      const mouseYPercentage =
        ((y - elementRect.top) / elementRect.height) * 100;

      setTransformValues({
        tiltX: Math.max(-20, Math.min(20, tiltX)),
        tiltY: Math.max(-20, Math.min(20, tiltY)),
        mouseXPercentage: Math.max(0, Math.min(100, mouseXPercentage)),
        mouseYPercentage: Math.max(0, Math.min(100, mouseYPercentage)),
        distance: Math.min(1, distance),
        angle,
      });
    },
    [transform]
  );

  // Throttled update function for better performance
  const updateMousePosition = useCallback(
    (clientX, clientY, targetElement = null) => {
      const now = Date.now();

      // Throttle updates for performance
      if (now - lastUpdateRef.current < throttleMs) {
        return;
      }
      lastUpdateRef.current = now;

      // Cancel any pending animation frame
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      // Use requestAnimationFrame for smooth updates
      frameRef.current = requestAnimationFrame(() => {
        const elementRect = targetElement?.getBoundingClientRect();

        const newPosition = {
          x: clientX,
          y: clientY,
          elementX: elementRect ? clientX - elementRect.left : 0,
          elementY: elementRect ? clientY - elementRect.top : 0,
          elementPositionX: elementRect ? elementRect.left : 0,
          elementPositionY: elementRect ? elementRect.top : 0,
        };

        setMousePosition(newPosition);

        // Calculate transforms if enabled
        if (transform && elementRect) {
          calculateTransforms(clientX, clientY, elementRect);
        }
      });
    },
    [throttleMs, transform, calculateTransforms]
  );

  // Mouse event handler
  const handleMouseMove = useCallback(
    (event) => {
      updateMousePosition(event.clientX, event.clientY, event.currentTarget);
    },
    [updateMousePosition]
  );

  // Touch event handler (for mobile devices)
  const handleTouchMove = useCallback(
    (event) => {
      if (!includeTouch || event.touches.length === 0) return;

      const touch = event.touches[0];
      updateMousePosition(touch.clientX, touch.clientY, event.currentTarget);
    },
    [includeTouch, updateMousePosition]
  );

  // Mouse leave handler
  const handleMouseLeave = useCallback(() => {
    if (!resetOnLeave) return;

    // Clear any existing timeout
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }

    // Reset position after delay
    resetTimeoutRef.current = setTimeout(() => {
      setMousePosition({
        x: 0,
        y: 0,
        elementX: 0,
        elementY: 0,
        elementPositionX: 0,
        elementPositionY: 0,
      });

      if (transform) {
        setTransformValues({
          tiltX: 0,
          tiltY: 0,
          mouseXPercentage: 50,
          mouseYPercentage: 50,
          distance: 0,
          angle: 0,
        });
      }
    }, resetDelay);
  }, [resetOnLeave, resetDelay, transform]);

  // Cleanup effect
  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  // Return object with mouse data and event handlers
  return {
    // Current mouse position data
    ...mousePosition,

    // Transform values for 3D effects
    ...transformValues,

    // Event handlers to attach to elements
    handlers: {
      onMouseMove: handleMouseMove,
      onTouchMove: includeTouch ? handleTouchMove : undefined,
      onMouseLeave: resetOnLeave ? handleMouseLeave : undefined,
    },

    // Utility functions
    updateMousePosition,

    // Check if mouse is within element bounds
    isWithinBounds: (elementRect) => {
      if (!elementRect) return false;
      return (
        mousePosition.x >= elementRect.left &&
        mousePosition.x <= elementRect.right &&
        mousePosition.y >= elementRect.top &&
        mousePosition.y <= elementRect.bottom
      );
    },
  };
};
