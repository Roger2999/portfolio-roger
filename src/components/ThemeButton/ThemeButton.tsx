import { useThemeStore } from "../../stores/themeStore";
import { Moon, Sun } from "lucide-react";
import { cn } from "../../helpers/cn";
interface ThemeButtonProps extends React.ComponentPropsWithRef<"button"> {
  className?: string;
}

export const ThemeButton = ({ className, ...props }: ThemeButtonProps) => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  return (
    <button
      className={cn(
        "flex justify-center items-center p-1 rounded-full cursor-pointer bg-blue-950/80 border border-black/10 dark:border-none dark:bg-surface/20",
        className,
      )}
      {...props}
      aria-label={
        theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"
      }
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-400 " />
      ) : (
        <Moon className="text-white" />
      )}
    </button>
  );
};
