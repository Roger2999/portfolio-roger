import { useEffect, useState } from "react";

export const useScrollTopVisible = (offset = 300) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > offset);
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [offset]);
  return { isVisible };
};
