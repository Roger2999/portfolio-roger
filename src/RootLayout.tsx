import { Suspense, useState, type ReactNode } from "react";
import { NavMenu } from "./layouts/NavMenu";
import {
  HamburgerButton,
  NavMenuDesktop,
  NavMenuMobile,
  ThemeButton,
} from "./components";
import { useIntersection } from "./hooks/useIntersection";
import { navigation, sectionIds } from "./data/navigation";
import { Aside } from "./layouts/Aside";
import { domAnimation, LazyMotion } from "motion/react";

export const RootLayout = ({ children }: { children: ReactNode }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const { activeLink, setActiveLink } = useIntersection(sectionIds);
  return (
    <>
      <div className="app-container flex flex-col min-h-dvh w-full">
        <header>
          <NavMenu>
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
          </NavMenu>
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
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
};
