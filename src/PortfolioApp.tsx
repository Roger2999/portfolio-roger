import logoDarkIcon from "./assets/icon-logo-dark.png";
import logoLightIcon from "./assets/icon-logo-light.png";
import phoneIcon from "./assets/icon-phone.svg";
import githubIcon from "./assets/icon-github.svg";
import githubDarkIcon from "./assets/icon-github-dark.svg";
import profileIcon from "./assets/profile-photo.webp";
import previewIcon from "./assets/icon-preview-button.png";
import {
  ButtonLink,
  HamburgerButton,
  MiniCard,
  NavMenuDesktop,
  NavMenuMobile,
  TechnologiesSection,
  ThemeButton,
} from "./components";
import { useState } from "react";
import { useThemeStore } from "./stores/themeStore";
import { useIntersection } from "./hooks/useIntersection";
import { getButtonThemeClasses } from "./Helpers/getButtonThemeClasses";
import { navigation, sectionIds } from "./data/navigation";

// Constantes fuera del componente

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
          />
        ) : (
          <img
            src={logoLightIcon}
            width={50}
            height={50}
            alt="logo de la web"
            className="logo rounded-full ml-10 bg-cover"
          />
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
          <MiniCard profilePhoto={profileIcon}>
            <ButtonLink
              href="#"
              className={`rounded-md h-fit  text-sm font-bold hover:scale-105 ${getButtonThemeClasses(
                theme
              )}`}
              label="Disponible para trabajar"
            />
          </MiniCard>
          <h1 className="font-bold">¡Hola, soy Roger!</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            mollitia cum consequatur provident aspernatur sapiente, quam
            molestias veniam perferendis ex blanditiis vel, praesentium velit,
            cupiditate culpa reiciendis odit officiis repudiandae.
          </p>
          <div className="flex gap-8 flex-wrap">
            <ButtonLink
              label="Contactame"
              icon={phoneIcon}
              href="https://wa.me/+5354849352"
              target="_blank"
              rel="noopener noreferrer"
              className={`${getButtonThemeClasses(theme)}`}
            />
            <ButtonLink
              label="GitHub"
              icon={`${theme === "dark" ? githubDarkIcon : githubIcon}`}
              href="https://github.com/roger2999"
              target="_blank"
              rel="noopener noreferrer"
              className={getButtonThemeClasses(theme)}
            />
          </div>
        </section>
        <section id="skills" className="home flex flex-col gap-5 px-5 m-auto">
          <TechnologiesSection />
        </section>
        <section id="projects" className="home flex flex-col gap-5 px-5 m-auto">
          <h2 className="font-bold">Proyectos</h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            mollitia cum consequatur provident aspernatur sapiente, quam
            molestias veniam perferendis ex blanditiis vel, praesentium velit,
            cupiditate culpa reiciendis odit officiis repudiandae.
          </p>
          <article className="buttons-container flex gap-8 flex-wrap">
            <ButtonLink label="Contactame" icon={previewIcon} />
            <ButtonLink label="GitHub" icon={previewIcon} />
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
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            mollitia cum consequatur provident aspernatur sapiente, quam
            molestias veniam perferendis ex blanditiis vel, praesentium velit,
            cupiditate culpa reiciendis odit officiis repudiandae.
          </p>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            mollitia cum consequatur provident aspernatur sapiente, quam
            molestias veniam perferendis ex blanditiis vel, praesentium velit,
            cupiditate culpa reiciendis odit officiis repudiandae.
          </p>
          <article className="flex gap-8 flex-wrap">
            <ButtonLink label="Contactame" icon={previewIcon} />
            <ButtonLink label="GitHub" icon={previewIcon} />
          </article>
        </section>
      </main>
      <footer className="footer">footer</footer>
    </div>
  );
};
