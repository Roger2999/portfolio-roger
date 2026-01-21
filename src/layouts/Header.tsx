import type { ReactNode } from "react";

import logoDarkIcon from "../assets/icon-logo-dark.png";
import logoLightIcon from "../assets/icon-logo-light.png";
import { ThemeImg } from "../components";

interface Props {
  children: ReactNode;
}
export const Header = ({ children }: Props) => {
  return (
    <header className="header flex justify-between items-center absolute top-5 w-full h-20">
      {/* logo */}
      <ThemeImg
        srcDark={logoDarkIcon}
        srcLight={logoLightIcon}
        width={50}
        heigth={50}
      />
      {children}
    </header>
  );
};
