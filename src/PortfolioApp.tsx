import {
  ButtonLink,
  HamburgerButton,
  NavMenuDesktop,
  NavMenuMobile,
  ThemeButton,
} from "./components";
import logoDarkIcon from "./assets/icon-logo-dark.png";
import logoLightIcon from "./assets/icon-logo-light.png";
import phoneIcon from "./assets/icon-phone.svg";
import githubIcon from "./assets/icon-github.svg";
import profileIcon from "./assets/icon-profile.png";
import previewIcon from "./assets/icon-preview-button.png";
import { useState } from "react";
import { useThemeStore } from "./stores/themeStore";
import { useIntersection } from "./hooks/useIntersection";

// Constantes fuera del componente
const navigation = [
  { id: "1", name: "Home", routes: "home" },
  { id: "2", name: "Projects", routes: "projects" },
  { id: "3", name: "Skills", routes: "skills" },
  { id: "4", name: "About me", routes: "about" },
];
const sectionIds = ["home", "projects", "skills", "about"];

// Helper function para estilos de botones con tema
const getButtonThemeClasses = (theme: "light" | "dark"): string => {
  return theme === "dark"
    ? "backdrop-blur-md bg-white/30 border-gray-500 hover:bg-white/10 text-gray-200"
    : "backdrop-blur-md bg-black/10 border-gray-200 hover:bg-black/70 hover:text-white text-gray-800";
};

export const PortfolioApp = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const theme = useThemeStore((state) => state.theme);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const { activeLink, setActiveLink } = useIntersection(sectionIds);
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
            className="logo rounded-full ml-10 bg-cover"
          ></img>
        ) : (
          <img
            src={logoLightIcon}
            width={50}
            height={50}
            alt="logo de la web"
            className="logo rounded-full ml-10 bg-cover"
          ></img>
        )}

        <div className="nav-container flex justify-center items-center w-full h-full">
          <NavMenuDesktop
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            navigation={navigation}
          />
        </div>
        <div className="buttons-container flex gap-5 mr-10">
          <ThemeButton />
          <HamburgerButton onOpenMenu={handleMenu} openMenu={openMenu} />
        </div>
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
        <section id="home" className="home flex flex-col gap-8 px-5 m-auto">
          <article className="flex items-center gap-5">
            <img src={profileIcon} width={80} height={80} alt="profile photo" />
            <ButtonLink
              href="#"
              className={`rounded-md h-fit text-sm font-bold ${getButtonThemeClasses(theme)}`}
              label="Disponible"
            />
          </article>
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
              icon={phoneIcon}
              href="https://wa.me/+5354849352"
              target="_blank"
              rel="noopener noreferrer"
              className={getButtonThemeClasses(theme)}
            />
            <ButtonLink
              label="GitHub"
              icon={githubIcon}
              href="https://github.com/roger2999"
              target="_blank"
              rel="noopener noreferrer"
              className={getButtonThemeClasses(theme)}
            />
          </article>
        </section>
        <section id="projects" className="home flex flex-col gap-5 px-5 m-auto">
          <h3 className="font-bold">Proyectos</h3>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            mollitia cum consequatur provident aspernatur sapiente, quam
            molestias veniam perferendis ex blanditiis vel, praesentium velit,
            cupiditate culpa reiciendis odit officiis repudiandae.
          </p>
          <article className="buttons-container flex gap-8 flex-wrap">
            <ButtonLink
              label="Contactame"
              icon={previewIcon}
            />
            <ButtonLink
              label="GitHub"
              icon={previewIcon}
            />
          </article>
        </section>
        <section id="skills" className="home flex flex-col gap-5 px-5 m-auto">
          <h3 className="font-bold">Habilidades</h3>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            mollitia cum consequatur provident aspernatur sapiente, quam
            molestias veniam perferendis ex blanditiis vel, praesentium velit,
            cupiditate culpa reiciendis odit officiis repudiandae.
          </p>
          <article className="flex gap-8 flex-wrap">
            <ButtonLink
              label="Contactame"
              icon={previewIcon}
            />
            <ButtonLink
              label="GitHub"
              icon={previewIcon}
            />
          </article>
        </section>
        <section id="about" className="home flex flex-col gap-5 px-5 m-auto">
          <h3 className="font-bold">Sobre mi</h3>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            mollitia cum consequatur provident aspernatur sapiente, quam
            molestias veniam perferendis ex blanditiis vel, praesentium velit,
            cupiditate culpa reiciendis odit officiis repudiandae.
          </p>
          <article className="flex gap-8 flex-wrap">
            <ButtonLink
              label="Contactame"
              icon={previewIcon}
            />
            <ButtonLink
              label="GitHub"
              icon={previewIcon}
            />
          </article>
        </section>
      </main>
      <footer className="footer">footer</footer>
    </div>
  );
};
