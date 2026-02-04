import { useThemeStore } from "../../stores/themeStore";
import iconDarkMode from "/images/icon-dark.png";
import iconLightMode from "/images/icon-light.png";
import { motion, AnimatePresence } from "motion/react";
interface ThemeButtonProps extends React.ComponentPropsWithRef<"button"> {
  className?: string;
}

export const ThemeButton = ({ className, ...props }: ThemeButtonProps) => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  return (
    <button
      className={`flex justify-center items-center w-20 h-10 rounded-full border cursor-pointer ${
        className || ""
      } ${
        theme === "dark"
          ? "bg-white/10 border-white/20"
          : "bg-black/10 border-black/10"
      }`}
      {...props}
      aria-label={
        theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"
      }
      onClick={toggleTheme}
    >
      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.img
            key={"ligth"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            src={iconLightMode}
            alt="icono de tema claro"
            loading="lazy"
            decoding="async"
            width={25}
            height={25}
          />
        ) : (
          <motion.img
            key={"dark"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            src={iconDarkMode}
            alt="icono de tema oscuro"
            loading="lazy"
            decoding="async"
            width={25}
            height={25}
          />
        )}
      </AnimatePresence>
    </button>
  );
};
