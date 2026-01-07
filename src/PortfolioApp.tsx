import { useThemeStore } from "./stores/themeStore";

export const PortfolioApp = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <>
      <div className="portfolio-container h-dvh w-dvw">
        <h1>Portfolio</h1>
        <button className="btn-theme" onClick={toggleTheme}>
          Cambiar a {theme === "dark" ? "Claro" : "Oscuro"}
        </button>
      </div>
    </>
  );
};
