import { motion } from "motion/react";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { useThemeStore } from "../../stores/themeStore";
import arrowLight from "/images/arrow-light.svg";
import arrowDark from "/images/arrow-dark.svg";
import { useScrollTopVisible } from "../../hooks/useScrollTopVisible";
export const BackToTopButton = () => {
  const theme = useThemeStore((state) => state.theme);
  const { isVisible } = useScrollTopVisible(300);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-10 right-10 opacity-40"
    >
      <ButtonLink
        role="button"
        icon={theme === "light" ? arrowDark : arrowLight}
        href="#"
        imgProps={{ className: "w-20 h-20" }}
      />
    </motion.div>
  );
};
