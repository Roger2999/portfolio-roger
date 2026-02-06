import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";
interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}
const THEME_KEY = "theme";

const getPreferredTheme = (): Theme => {
  if (typeof window === "undefined") return "light";
  const theme_item = localStorage.getItem(THEME_KEY) as Theme | null;
  return theme_item
    ? theme_item
    : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
};

export const useThemeStore = create(
  persist<ThemeState>(
    (set) => ({
      theme: getPreferredTheme(),
      toggleTheme: () =>
        set((state) => {
          const newTheme = state.theme === "light" ? "dark" : "light";
          if (typeof document !== "undefined") {
            document.documentElement.setAttribute("data-theme", newTheme);
          }
          return { theme: newTheme };
        }),
    }),
    {
      name: THEME_KEY,
      onRehydrateStorage: () => (state) => {
        const theme = (state?.theme as Theme) ?? getPreferredTheme();
        if (typeof document !== "undefined") {
          document.documentElement.setAttribute("data-theme", theme);
        }
      },
    },
  ),
);

// Apply theme synchronously in a script tag before React hydration to prevent FOUC
// This is handled by index.html inline script
if (typeof document !== "undefined") {
  // Ensure theme is applied if not already set by inline script
  if (!document.documentElement.getAttribute("data-theme")) {
    document.documentElement.setAttribute("data-theme", getPreferredTheme());
  }
}
