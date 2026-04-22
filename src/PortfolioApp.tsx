import {
  BackToTopButton,
  HamburgerButton,
  NavMenuDesktop,
  NavMenuMobile,
  ThemeButton,
} from "./components";
import { Suspense, useState } from "react";

import { useIntersection } from "./hooks/useIntersection";
import { navigation, sectionIds } from "./data/navigation";

import { Aside } from "./layouts/Aside";
import { Main } from "./layouts/Main";
import { Footer } from "./layouts/Footer";
import { domAnimation, LazyMotion } from "motion/react";
import { NavMenu } from "./layouts/NavMenu";

export const PortfolioApp = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const { activeLink, setActiveLink } = useIntersection(sectionIds);
  return (
    <div className="app-container flex flex-col min-h-dvh w-full">
      <NavMenu>
        <div className="nav-container flex justify-center items-center w-full h-full">
          <NavMenuDesktop
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            navigation={navigation}
          />
        </div>
        <div className="buttons-container flex gap-5 mr-10">
          <LazyMotion features={domAnimation}>
            <ThemeButton className="sm:hidden" />
          </LazyMotion>
          <HamburgerButton onOpenMenu={handleMenu} openMenu={openMenu} />
        </div>
      </NavMenu>
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

      <Footer />
      <BackToTopButton />
    </div>
  );
};
