import type { ReactNode } from "react";
import { ThemeImg } from "../components";

interface Props {
  children: ReactNode;
}
export const NavMenu = ({ children }: Props) => {
  return (
    <>
      {/* logo */}
      <ThemeImg
        srcDark={"/images/icon-logo-dark.png"}
        srcLight={"/images/icon-logo-light.png"}
        width={75}
        height={75}
      />
      {children}
    </>
  );
};
