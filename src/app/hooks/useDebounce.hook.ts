import { useRef, useEffect } from "react";

const useDebouncedFunctionWithCansel = <F extends (...args: any[]) => any>(
  func: F,
  delay: number,
  cleanUp: boolean = false
) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  function clearTimer() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }

  useEffect(() => (cleanUp ? clearTimer : undefined), [cleanUp]);

  return (cansel: boolean, ...args: Parameters<F>) => {
    clearTimer();
    if (!cansel) timeoutRef.current = setTimeout(() => func(...args), delay);
  };
};

export { useDebouncedFunctionWithCansel };
