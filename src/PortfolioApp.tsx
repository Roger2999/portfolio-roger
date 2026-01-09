import { HamburgerButton, NavMenu, ThemeButton } from "./components";

import { useState } from "react";

export const PortfolioApp = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="app-container flex flex-col h-dvh w-dvw">
      <header className="header flex justify-between items-center absolute top-5 w-full h-20">
        {/* logo */}
        <div className="logo bg-gray-300 rounded-full border-4 min-w-10 min-h-10 ml-10"></div>
        <article className="nav-container flex justify-center items-center">
          <NavMenu />
        </article>
        <article className="flex gap-5 mr-10">
          <ThemeButton />
          <HamburgerButton onOpenMenu={handleMenu} openMenu={openMenu} />
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
