import { useThemeStore } from "./stores/themeStore";

export const PortfolioApp = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <div className="app-container flex flex-col h-dvh w-dvw">
      <header className="header">header</header>
      <main className="portfolio-container main flex-1">
        <h1>Portfolio</h1>
        <button className="btn-theme" onClick={toggleTheme}>
          Cambiar a {theme === "dark" ? "Claro" : "Oscuro"}
        </button>
      </main>
      <footer className="footer">footer</footer>
    </div>
  );
};
