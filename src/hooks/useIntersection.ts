import { useEffect, useState } from "react";

export const useIntersection = (sections_ids: string[]) => {
  const [activeLink, setActiveLink] = useState<string>("#home");
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "-150px 0px -50% 0px",
      threshold: 0.4,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, options);
    sections_ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, [sections_ids]);

  return { activeLink, setActiveLink };
};
