import { useEffect, useState } from "react";

export const useIntersection = (sectionsIds: string[]) => {
  const [activeLink, setActiveLink] = useState<string>("home");
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "-80px 0px -50% 0px",
      threshold: 0.1,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, options);
    sectionsIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, [sectionsIds]);

  return { activeLink, setActiveLink };
};
