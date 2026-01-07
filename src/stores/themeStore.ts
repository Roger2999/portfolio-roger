import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";
interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}
const THEME_KEY = "theme";
const getInitialTheme = (): Theme => {
  const ls = localStorage.getItem(THEME_KEY);
  return ls ? (ls as Theme) : "dark";
};
export const useThemeStore = create(
  persist<ThemeState>(
    (set) => ({
      theme: getInitialTheme(),
      toggleTheme: () =>
        set((state) => {
          const newTheme = state.theme === "light" ? "dark" : "light";
          if (typeof document !== "undefined") {
            document.documentElement.setAttribute("data-theme", newTheme);
          }
          return { theme: newTheme };
        }),
    }),
    { name: "theme" }
  )
);
