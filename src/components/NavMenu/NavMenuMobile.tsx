import { useEffect } from "react";
import { cn } from "../../helpers/cn";

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
      role="dialog"
      aria-modal="true"
      aria-labelledby="nav-menu-mobile"
    >
      <nav
        id="nav-menu-mobile"
        onClick={handleMenuPropagation}
        className={cn(
          "nav-mobile-menu fixed right-0 h-full w-60 max-w-[80%] sm:hidden rounded-l-2xl bg-gray-300/80 dark:bg-black/70 border-l-6 dark:border-l-gray-600/50 border-l-gray-600 ",
        )}
      >
        <ul className="flex flex-col pt-28 gap-8 justify-center items-start pl-10">
          {navigation.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.routes}`}
                onClick={() => setActiveLink(nav.routes)}
                className={cn(
                  "pb-2 font-bold",
                  activeLink === nav.routes && "border-b-4",
                )}
                aria-current={activeLink === nav.routes ? "page" : undefined}
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
