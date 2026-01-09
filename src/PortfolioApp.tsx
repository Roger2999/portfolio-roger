import {
  HamburgerButton,
  NavMenuDesktop,
  NavMenuMobile,
  ThemeButton,
} from "./components";

import { useState } from "react";

export const PortfolioApp = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("#home");
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const navigation = [
    { id: "1", name: "Home", routes: "#home" },
    { id: "2", name: "Projects", routes: "#projects" },
    { id: "3", name: "Skills", routes: "#skills" },
    { id: "4", name: "About me", routes: "#about" },
  ];
  return (
    <div className="app-container flex flex-col h-dvh w-dvw">
      <header className="header flex justify-between items-center absolute top-5 w-full h-20">
        {/* logo */}
        <div className="logo bg-gray-300 rounded-full border-4 min-w-10 min-h-10 ml-10"></div>
        <article className="nav-container flex justify-center items-center">
          <NavMenuDesktop
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            navigation={navigation}
          />
        </article>
        <article className="flex gap-5 mr-10">
          <ThemeButton />
          <HamburgerButton onOpenMenu={handleMenu} openMenu={openMenu} />
        </article>
      </header>
      <aside>
        {openMenu && (
          <NavMenuMobile
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            navigation={navigation}
          />
        )}
      </aside>
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
