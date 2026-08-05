import { Suspense, useState, type ReactNode } from "react";
import {
  BackToTopButton,
  HamburgerButton,
  NavMenuDesktop,
  NavMenuMobile,
  ThemeButton,
  ThemeImg,
} from "./components";
import { useIntersection } from "./hooks/useIntersection";
import { navigation, sectionIds } from "./data/navigation";
import { Aside } from "./layouts/Aside";
import { domAnimation, LazyMotion } from "motion/react";
import { Footer } from "./layouts/Footer";

export const LayoutRoot = ({ children }: { children: ReactNode }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const { activeLink, setActiveLink } = useIntersection(sectionIds);
  return (
    <>
      <div className="app-container flex flex-col min-h-dvh w-full">
        <header className="header flex justify-center items-center w-full h-20">
          <ThemeImg
            srcDark={"/images/icon-logo-dark.png"}
            srcLight={"/images/icon-logo-light.png"}
            width={75}
            height={75}
          />
          <div className="nav-container flex justify-center items-center w-full h-full">
            <NavMenuDesktop
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              navigation={navigation}
            />
            <div className="buttons-container flex justify-end gap-5 mr-10 w-full sm:hidden">
              <ThemeButton className="relative top-5" />
              <HamburgerButton onOpenMenu={handleMenu} openMenu={openMenu} />
            </div>
          </div>
        </header>
        <aside>
          <Aside openMenu={openMenu}>
            <NavMenuMobile
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              navigation={navigation}
            />
          </Aside>
        </aside>
        <LazyMotion features={domAnimation} strict>
          <Suspense fallback={<div>Cargando...</div>}></Suspense>
        </LazyMotion>
        <main className="portfolio-container main flex-1 pt-20 p-5">
          {" "}
          {children}
        </main>
        <footer className="footer py-6 px-4">
          {" "}
          <Footer />
        </footer>
        <BackToTopButton />
      </div>
    </>
  );
};
