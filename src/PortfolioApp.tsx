import { NavMenu } from "./components";
import { useThemeStore } from "./stores/themeStore";
import iconHamburger from "./assets/icon-hamburger.svg";
import iconClose from "./assets/icon-close.svg";
import iconDarkMode from "./assets/icon-dark.png";
import iconLightMode from "./assets/icon-light.png";

import { useState } from "react";

export const PortfolioApp = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="app-container flex flex-col h-dvh w-dvw">
      <header className="header flex justify-between items-center absolute top-5 w-full h-20">
        {/* logo */}
        <div className="logo bg-gray-300 rounded-full border-4 min-w-10 min-h-10 ml-10"></div>
        <div className="nav-container flex justify-center items-center">
          <NavMenu />
        </div>
        <article className="flex gap-5 mr-10">
          <button
            className={`flex justify-center items-center w-20 h-10 rounded-full border-2 cursor-pointer  ${
              theme === "dark" ? " border-white/20" : " border-gray-400"
            }`}
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
          <button onClick={handleMenu} className="menu-mobile sm:hidden">
            {!openMenu ? (
              <img
                src={iconHamburger}
                alt="hamburger icon"
                width={30}
                height={30}
              />
            ) : (
              <img src={iconClose} alt="close icon" width={30} height={30} />
            )}
          </button>
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
