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
    <>
      <button
        {...props}
        className={`flex justify-center items-center w-20 h-10 rounded-full border-2 cursor-pointer  ${
          className ?? ""
        } ${theme === "dark" ? " border-white/20" : " border-gray-400"}`}
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <img
            src={iconLightMode}
            alt="dark theme icon"
            loading="lazy"
            decoding="async"
            width={30}
            height={30}
          />
        ) : (
          <img
            src={iconDarkMode}
            alt="light theme icon"
            loading="lazy"
            decoding="async"
            width={30}
            height={30}
          />
        )}
      </button>
    </>
  );
};
