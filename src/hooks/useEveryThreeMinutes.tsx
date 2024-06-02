import { useEffect } from "react";

export const useEveryThreeMinutes = (callback) => {
  useEffect(() => {
    const interval = setInterval(callback, 1800000);

    return () => clearInterval(interval);
  }, [callback]);
};
