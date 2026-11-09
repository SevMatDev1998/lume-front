import { useEffect, useState } from "react";

const TOP_OFFSET = 30;
const MIN_DELTA = 4;

const useScrollDirection = () => {
  const [direction, setDirection] = useState<"top" | "down" | "up">("top");

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (y <= TOP_OFFSET) {
        setDirection("top");
        lastY = y;
        return;
      }
      if (Math.abs(y - lastY) < MIN_DELTA) return;
      setDirection(y > lastY ? "down" : "up");
      lastY = y;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return direction;
};

export default useScrollDirection;
