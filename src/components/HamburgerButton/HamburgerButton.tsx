import iconHamburger from "../../assets/icon-hamburger.svg";
import iconClose from "../../assets/icon-close.svg";
interface Props {
  onOpenMenu: () => void;
  openMenu: boolean;
}
export const HamburgerButton = ({ onOpenMenu, openMenu }: Props) => {
  return (
    <>
      <button
        onClick={onOpenMenu}
        className="menu-mobile relative z-20 sm:hidden"
      >
        {!openMenu ? (
          <img
            src={iconHamburger}
            alt="hamburger icon"
            width={30}
            height={30}
          />
        ) : (
          <img src={iconClose} alt="close icon" width={30} height={30} />
        )}
      </button>
    </>
  );
};
