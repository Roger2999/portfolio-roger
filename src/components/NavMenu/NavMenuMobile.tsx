import { useEffect } from "react";
import { useThemeStore } from "../../stores/themeStore";

interface NavMenuMobileProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: { id: string; name: string; routes: string }[];
}
export const NavMenuMobile = ({
  activeLink,
  setActiveLink,
  openMenu,
  setOpenMenu,
  navigation,
}: NavMenuMobileProps) => {
  const theme = useThemeStore((state) => state.theme);
  const handleMenuPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const handleCloseOverlay = () => {
    setOpenMenu(false);
  };
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(false);
      }
    };
    if (openMenu) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [openMenu, setOpenMenu]);

  return (
    <div
      onClick={handleCloseOverlay}
      className="overlay-menu fixed top-0 right-0 h-dvh w-dvw z-10 backdrop-blur-xs sm:hidden"
    >
      <nav
        onClick={handleMenuPropagation}
        className={`nav-mobile-menu fixed right-0 h-full w-60 max-w-[80%] sm:hidden rounded-l-2xl ${
          theme === "dark"
            ? "backdrop-blur-xs bg-white/50"
            : "backdrop-blur-3xl bg-black/30"
        }`}
      >
        <ul className="flex flex-col pt-28 gap-8 justify-center items-start pl-10">
          {navigation.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.routes}`}
                onClick={() => setActiveLink(nav.routes)}
                className={`pb-2 ${
                  activeLink === nav.routes ? "border-b-4" : ""
                }`}
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
