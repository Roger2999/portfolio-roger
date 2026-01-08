import { NavMenu } from "./components";
import { useThemeStore } from "./stores/themeStore";

export const PortfolioApp = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <div className="app-container flex flex-col h-dvh w-dvw">
      <header className="header flex justify-center items-center absolute top-5 w-full h-20">
        <div className="bg-gray-300 absolute left-5 rounded-full border-4 w-20 h-20"></div>
        <NavMenu />
        <button className="btn-theme" onClick={toggleTheme}>
          Cambiar a {theme === "dark" ? "Claro" : "Oscuro"}
        </button>
      </header>
      <main className="portfolio-container main flex-1 pt-32">
        <h1 id="home">Portfolio</h1>
        <div className="flex flex-col gap-20">
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum
            dicta fugit esse nihil facere, odit voluptas numquam dolorem
            explicabo. Sapiente reprehenderit odit magnam saepe libero, nam
            pariatur voluptatibus dolores!
          </article>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum
            dicta fugit esse nihil facere, odit voluptas numquam dolorem
            explicabo. Sapiente reprehenderit odit magnam saepe libero, nam
            pariatur voluptatibus dolores!
          </article>
          <article id="projects">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum
            dicta fugit esse nihil facere, odit voluptas numquam dolorem
            explicabo. Sapiente reprehenderit odit magnam saepe libero, nam
            pariatur voluptatibus dolores!
          </article>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum
            dicta fugit esse nihil facere, odit voluptas numquam dolorem
            explicabo. Sapiente reprehenderit odit magnam saepe libero, nam
            pariatur voluptatibus dolores!
          </article>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum
            dicta fugit esse nihil facere, odit voluptas numquam dolorem
            explicabo. Sapiente reprehenderit odit magnam saepe libero, nam
            pariatur voluptatibus dolores!
          </article>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum
            dicta fugit esse nihil facere, odit voluptas numquam dolorem
            explicabo. Sapiente reprehenderit odit magnam saepe libero, nam
            pariatur voluptatibus dolores!
          </article>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum
            dicta fugit esse nihil facere, odit voluptas numquam dolorem
            explicabo. Sapiente reprehenderit odit magnam saepe libero, nam
            pariatur voluptatibus dolores!
          </article>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum
            dicta fugit esse nihil facere, odit voluptas numquam dolorem
            explicabo. Sapiente reprehenderit odit magnam saepe libero, nam
            pariatur voluptatibus dolores!
          </article>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum
            dicta fugit esse nihil facere, odit voluptas numquam dolorem
            explicabo. Sapiente reprehenderit odit magnam saepe libero, nam
            pariatur voluptatibus dolores!
          </article>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum
            dicta fugit esse nihil facere, odit voluptas numquam dolorem
            explicabo. Sapiente reprehenderit odit magnam saepe libero, nam
            pariatur voluptatibus dolores!
          </article>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum
            dicta fugit esse nihil facere, odit voluptas numquam dolorem
            explicabo. Sapiente reprehenderit odit magnam saepe libero, nam
            pariatur voluptatibus dolores!
          </article>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum
            dicta fugit esse nihil facere, odit voluptas numquam dolorem
            explicabo. Sapiente reprehenderit odit magnam saepe libero, nam
            pariatur voluptatibus dolores!
          </article>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum
            dicta fugit esse nihil facere, odit voluptas numquam dolorem
            explicabo. Sapiente reprehenderit odit magnam saepe libero, nam
            pariatur voluptatibus dolores!
          </article>
          <article id="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum
            dicta fugit esse nihil facere, odit voluptas numquam dolorem
            explicabo. Sapiente reprehenderit odit magnam saepe libero, nam
            pariatur voluptatibus dolores!
          </article>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum
            dicta fugit esse nihil facere, odit voluptas numquam dolorem
            explicabo. Sapiente reprehenderit odit magnam saepe libero, nam
            pariatur voluptatibus dolores!
          </article>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum
            dicta fugit esse nihil facere, odit voluptas numquam dolorem
            explicabo. Sapiente reprehenderit odit magnam saepe libero, nam
            pariatur voluptatibus dolores!
          </article>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum
            dicta fugit esse nihil facere, odit voluptas numquam dolorem
            explicabo. Sapiente reprehenderit odit magnam saepe libero, nam
            pariatur voluptatibus dolores!
          </article>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum
            dicta fugit esse nihil facere, odit voluptas numquam dolorem
            explicabo. Sapiente reprehenderit odit magnam saepe libero, nam
            pariatur voluptatibus dolores!
          </article>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum
            dicta fugit esse nihil facere, odit voluptas numquam dolorem
            explicabo. Sapiente reprehenderit odit magnam saepe libero, nam
            pariatur voluptatibus dolores!
          </article>
        </div>
      </main>
      <footer className="footer">footer</footer>
    </div>
  );
};
