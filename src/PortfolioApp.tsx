import {
  ButtonLink,
  HamburgerButton,
  NavMenuDesktop,
  NavMenuMobile,
  ThemeButton,
} from "./components";
import logoDarkIcon from "./assets/icon-logo-dark.png";
import logoLightIcon from "./assets/icon-logo-light.png";

import { useState } from "react";
import { useThemeStore } from "./stores/themeStore";
import { useIntersection } from "./hooks/useIntersection";

export const PortfolioApp = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const theme = useThemeStore((state) => state.theme);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const navigation = [
    { id: "1", name: "Home", routes: "home" },
    { id: "2", name: "Projects", routes: "projects" },
    { id: "3", name: "Skills", routes: "skills" },
    { id: "4", name: "About me", routes: "about" },
  ];
  const section_ids = ["home", "projects", "skills", "about"];
  const { activeLink, setActiveLink } = useIntersection(section_ids);
  return (
    <div className="app-container flex flex-col min-h-dvh w-full">
      <header className="header flex justify-between items-center absolute top-5 w-full h-20">
        {/* logo */}
        {theme === "dark" ? (
          <img
            src={logoDarkIcon}
            width={50}
            height={50}
            alt="logo de la web"
            className="logo  rounded-full ml-10 bg-cover"
          ></img>
        ) : (
          <img
            src={logoLightIcon}
            width={50}
            height={50}
            alt="logo de la web"
            className="logo  rounded-full ml-10 bg-cover"
          ></img>
        )}

        <article className="nav-container flex justify-center items-center w-full h-full">
          <NavMenuDesktop
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            navigation={navigation}
          />
        </article>
        <article className="buttons-container flex gap-5 mr-10">
          <ThemeButton />
          <HamburgerButton onOpenMenu={handleMenu} openMenu={openMenu} />
        </article>
      </header>
      <aside>
        {openMenu && (
          <NavMenuMobile
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            navigation={navigation}
          />
        )}
      </aside>
      <main className="portfolio-container main flex-1 pt-32 p-5">
        <section id="home" className="home flex flex-col gap-5 px-5 m-auto">
          <h1 className="font-bold">¡Hola, soy Roger!</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            mollitia cum consequatur provident aspernatur sapiente, quam
            molestias veniam perferendis ex blanditiis vel, praesentium velit,
            cupiditate culpa reiciendis odit officiis repudiandae.
          </p>
          <article className="flex gap-8 flex-wrap">
            <ButtonLink
              label="Contactame"
              icon="src/assets/icon-preview-button.png"
            />
            <ButtonLink
              label="GitHub"
              icon="src/assets/icon-preview-button.png"
            />
          </article>
        </section>
        <section id="projects" className="home flex flex-col gap-5 px-5 m-auto">
          <h1 className="font-bold">¡Hola, soy Roger!</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            mollitia cum consequatur provident aspernatur sapiente, quam
            molestias veniam perferendis ex blanditiis vel, praesentium velit,
            cupiditate culpa reiciendis odit officiis repudiandae.
          </p>
          <article className="flex gap-8 flex-wrap">
            <ButtonLink
              label="Contactame"
              icon="src/assets/icon-preview-button.png"
            />
            <ButtonLink
              label="GitHub"
              icon="src/assets/icon-preview-button.png"
            />
          </article>
        </section>
        <section id="skills" className="home flex flex-col gap-5 px-5 m-auto">
          <h1 className="font-bold">¡Hola, soy Roger!</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            mollitia cum consequatur provident aspernatur sapiente, quam
            molestias veniam perferendis ex blanditiis vel, praesentium velit,
            cupiditate culpa reiciendis odit officiis repudiandae.
          </p>
          <article className="flex gap-8 flex-wrap">
            <ButtonLink
              label="Contactame"
              icon="src/assets/icon-preview-button.png"
            />
            <ButtonLink
              label="GitHub"
              icon="src/assets/icon-preview-button.png"
            />
          </article>
        </section>
        <section id="about" className="home flex flex-col gap-5 px-5 m-auto">
          <h1 className="font-bold">¡Hola, soy Roger!</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            mollitia cum consequatur provident aspernatur sapiente, quam
            molestias veniam perferendis ex blanditiis vel, praesentium velit,
            cupiditate culpa reiciendis odit officiis repudiandae.
          </p>
          <article className="flex gap-8 flex-wrap">
            <ButtonLink
              label="Contactame"
              icon="src/assets/icon-preview-button.png"
            />
            <ButtonLink
              label="GitHub"
              icon="src/assets/icon-preview-button.png"
            />
          </article>
        </section>
      </main>
      <footer className="footer">footer</footer>
    </div>
  );
};
