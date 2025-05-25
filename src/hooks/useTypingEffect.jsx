import { useState, useEffect, useCallback } from "react";

export const useTypingEffect = (options = {}) => {
  const {
    text = "",
    speed = 50,
    delay = 0,
    cursor = true,
    infinite = false,
    onComplete = () => {},
  } = options;

  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const startTyping = useCallback(() => {
    setIsTyping(true);
    setCurrentIndex(0);
    setDisplayText("");
  }, []);

  useEffect(() => {
    let timeoutId;

    if (delay > 0 && !isTyping) {
      timeoutId = setTimeout(startTyping, delay);
      return () => clearTimeout(timeoutId);
    }

    if (!isTyping) {
      startTyping();
    }
  }, [delay, isTyping, startTyping]);

  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    } else {
      setIsTyping(false);
      onComplete();

      if (infinite) {
        const timeoutId = setTimeout(startTyping, 1500);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [currentIndex, infinite, isTyping, onComplete, speed, text, startTyping]);

  return {
    displayText,
    isTyping,
    isComplete: currentIndex === text.length,
    cursor: cursor && isTyping,
    reset: startTyping,
  };
};
