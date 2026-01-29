import type { ReactNode } from "react";
import { ThemeImg } from "../components";

interface Props {
  children: ReactNode;
}
export const Header = ({ children }: Props) => {
  return (
    <header className="header flex justify-between items-center absolute top-5 w-full h-20">
      {/* logo */}
      <ThemeImg
        srcDark={"/images/icon-logo-dark.png"}
        srcLight={"/images/icon-logo-light.png"}
        width={75}
        heigth={75}
      />
      {children}
    </header>
  );
};
