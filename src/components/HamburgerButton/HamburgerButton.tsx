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
    <>
      <button
        onClick={onOpenMenu}
        className="menu-mobile relative z-20 sm:hidden"
      >
        {!openMenu ? (
          theme === "dark" ? (
            <img
              src={iconDarkHamburger}
              width={40}
              height={40}
              alt="icono de menu lateral"
              className="hamburger-menu rounded-full  bg-cover"
            ></img>
          ) : (
            <img
              src={iconLightHamburger}
              width={40}
              height={40}
              alt="icono de menu lateral"
              className="hamburger-menu rounded-full   bg-cover"
            ></img>
          )
        ) : (
          <img src={iconClose} alt="close icon" width={30} height={30} />
        )}
      </button>
    </>
  );
};
