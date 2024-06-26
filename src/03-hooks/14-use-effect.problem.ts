import { useEffect } from "react";

export const useTimeout = (timerMs: number) => {
  useEffect(
    () =>
      {
        const timeoutId = setTimeout(() => {
        console.log("Done!");
        }, timerMs)

        return () => {
          clearTimeout(timeoutId)
        }            
    
      },
    [timerMs],
  );
};
