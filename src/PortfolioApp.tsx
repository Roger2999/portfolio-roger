import { NavMenu } from "./components";
import { useThemeStore } from "./stores/themeStore";

export const PortfolioApp = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <div className="app-container flex flex-col h-dvh w-dvw">
      <header className="header flex justify-between items-center absolute top-5 w-full h-20">
        <div className="logo bg-gray-300 rounded-full border-4 w-20 h-20 ml-10"></div>
        <div className="nav-container flex justify-center items-center">
          <NavMenu />
        </div>
        <article className="flex gap-5 mr-10">
          <button
            className={`btn-theme  flex justify-center items-center w-10 h-10 p-6 rounded-full border-2 ${
              theme === "dark"
                ? "bg-white/20 border-white/20 backdrop-blur-3xl"
                : "bg-white/50 border-gray-400  backdrop-blur-xs"
            }`}
            onClick={toggleTheme}
          >
            {theme === "dark" ? "Claro" : "Oscuro"}
          </button>
          <button className="menu-mobile bg-gray-500 sm:hidden">Menu</button>
        </article>
      </header>
      <main className="portfolio-container main flex-1 pt-32">
        <h1 id="home">Portfolio</h1>
        <div className="flex flex-col gap-20">
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum
              dicta fugit esse nihil facere, odit voluptas numquam dolorem
              explicabo. Sapiente reprehenderit odit magnam saepe libero, nam
              pariatur voluptatibus dolores!
            </p>
          </article>
        </div>
      </main>
      <footer className="footer">footer</footer>
    </div>
  );
};
