import { useThemeStore } from "../../stores/themeStore";
import iconDarkMode from "../../assets/icon-dark.png";
import iconLightMode from "../../assets/icon-light.png";
interface ThemeButtonProps extends React.ComponentPropsWithRef<"button"> {
  className?: string;
}

export const ThemeButton = ({ className, ...props }: ThemeButtonProps) => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  return (
    <button
      {...props}
      aria-label={
        theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"
      }
      className={`flex justify-center items-center w-20 h-10 rounded-full border cursor-pointer ${
        className ?? ""
      } ${
        theme === "dark"
          ? "bg-white/10 border-white/20"
          : "bg-black/10 border-black/10"
      }`}
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <img
          src={iconLightMode}
          alt="icono de tema claro"
          loading="lazy"
          decoding="async"
          width={25}
          height={25}
        />
      ) : (
        <img
          src={iconDarkMode}
          alt="icono de tema oscuro"
          loading="lazy"
          decoding="async"
          width={25}
          height={25}
        />
      )}
    </button>
  );
};
