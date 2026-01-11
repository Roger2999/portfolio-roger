import iconDarkHamburger from "../../assets/icon-dark-hamburger.png";
import iconLightHamburger from "../../assets/icon-light-hamburger.png";

import iconClose from "../../assets/icon-close.svg";
import { useThemeStore } from "../../stores/themeStore";
interface Props {
  onOpenMenu: () => void;
  openMenu: boolean;
}
export const HamburgerButton = ({ onOpenMenu, openMenu }: Props) => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <button
      onClick={onOpenMenu}
      className="menu-mobile relative z-20 sm:hidden"
      aria-label={openMenu ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={openMenu}
      aria-controls="nav-menu-mobile"
    >
      {!openMenu ? (
        theme === "dark" ? (
          <img
            src={iconDarkHamburger}
            width={40}
            height={40}
            alt="icono de menú lateral"
            className="hamburger-menu rounded-full bg-cover"
          />
        ) : (
          <img
            src={iconLightHamburger}
            width={40}
            height={40}
            alt="icono de menú lateral"
            className="hamburger-menu rounded-full bg-cover"
          />
        )
      ) : (
        <img src={iconClose} alt="cerrar menú" width={30} height={30} />
      )}
    </button>
  );
};
