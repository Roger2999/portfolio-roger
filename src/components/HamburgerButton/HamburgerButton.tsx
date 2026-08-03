import { X, Menu } from "lucide-react";
interface Props {
  onOpenMenu: () => void;
  openMenu: boolean;
}
export const HamburgerButton = ({ onOpenMenu, openMenu }: Props) => {
  return (
    <button
      onClick={onOpenMenu}
      className="menu-mobile relative top-5 z-20"
      aria-label={openMenu ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={openMenu}
      aria-controls="nav-menu-mobile"
    >
      {!openMenu ? (
        <Menu className="size-8" />
      ) : (
        <X className="fixed right-10 top-10 size-8" />
      )}
    </button>
  );
};
