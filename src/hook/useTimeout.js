import { useRef } from "react";

const useTimeout = () => {
  const timeoutRef = useRef();

  const setTimeout = (timeoutFn) => {
    timeoutRef.current = timeoutFn;
  };

  const stopTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  };

  return [setTimeout, stopTimeout];
};

export default useTimeout;
