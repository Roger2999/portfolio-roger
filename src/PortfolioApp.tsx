import {
  ButtonLink,
  HamburgerButton,
  NavMenuDesktop,
  NavMenuMobile,
  ThemeButton,
} from "./components";
import { Suspense, useState } from "react";
import arrowDark from "./assets/arrow-dark.svg";
import arrowLight from "./assets/arrow-light.svg";

import { useIntersection } from "./hooks/useIntersection";

import { navigation, sectionIds } from "./data/navigation";
import { Header } from "./layouts/Header";
import { Aside } from "./layouts/Aside";
import { Main } from "./layouts/Main";
import { Footer } from "./layouts/Footer";
import { domAnimation, LazyMotion } from "motion/react";
import { useThemeStore } from "./stores/themeStore";

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
      <Header>
        <div className="nav-container flex justify-center items-center w-full h-full">
          <NavMenuDesktop
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            navigation={navigation}
          />
        </div>
        <div className="buttons-container flex gap-5 mr-10">
          <ThemeButton className="sm:hidden" />
          <HamburgerButton onOpenMenu={handleMenu} openMenu={openMenu} />
        </div>
      </Header>
      <Aside openMenu={openMenu}>
        <NavMenuMobile
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          navigation={navigation}
        />
      </Aside>
      <LazyMotion features={domAnimation} strict>
        <Suspense fallback={<div>Cargando...</div>}>
          <Main />
        </Suspense>
      </LazyMotion>
      <ButtonLink
        icon={theme === "light" ? arrowDark : arrowLight}
        imgHeigth="20"
        imgWidth="20"
        href="#"
        className="fixed bottom-10 right-20 opacity-40"
      />
      <Footer />
    </div>
  );
};
