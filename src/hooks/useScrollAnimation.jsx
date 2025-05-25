import { useState, useEffect, useCallback } from "react";

export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.2,
    rootMargin = "0px",
    triggerOnce = true,
    animateWhenVisible = true,
  } = options;

  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const callbackFunction = useCallback(
    (entries) => {
      const [entry] = entries;
      const isEntryVisible = entry.isIntersecting;

      if (isEntryVisible) {
        setIsVisible(true);
        if (triggerOnce) {
          setHasAnimated(true);
        }
      } else {
        if (!triggerOnce) {
          setIsVisible(false);
        }
      }
    },
    [triggerOnce]
  );

  useEffect(() => {
    if (!ref || (triggerOnce && hasAnimated)) return;

    const observer = new IntersectionObserver(callbackFunction, {
      threshold,
      rootMargin,
    });

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, threshold, rootMargin, callbackFunction, triggerOnce, hasAnimated]);

  return {
    ref: setRef,
    isVisible: animateWhenVisible ? isVisible : true,
    hasAnimated,
    reset: useCallback(() => {
      setIsVisible(false);
      setHasAnimated(false);
    }, []),
  };
};
