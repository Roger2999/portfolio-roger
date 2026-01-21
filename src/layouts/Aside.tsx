import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  openMenu: boolean;
}
export const Aside = ({ children, openMenu }: Props) => {
  return <aside>{openMenu && children}</aside>;
};
