import { useState } from "react";
import { useThemeStore } from "../../stores/themeStore";

export const NavMenu = () => {
  const theme = useThemeStore((state) => state.theme);
  const navigation = [
    { id: "1", name: "Home", routes: "#home" },
    { id: "2", name: "Projects", routes: "#projects" },
    { id: "3", name: "Skills", routes: "#skills" },
    { id: "4", name: "About me", routes: "#about" },
  ];
  const [activeLink, setActiveLink] = useState<string>("#home");
  return (
    <>
      <nav
        className={`  nav-desktop-container  hidden fixed top-5  z-10 sm:flex justify-center items-center w-125 max-w-[60%] border-2 h-20 rounded-3xl ${
          theme === "dark"
            ? "bg-white/20 border-white/20 backdrop-blur-3xl"
            : "bg-white/50 border-gray-400  backdrop-blur-xs"
        }`}
      >
        <ul className="flex gap-8 justify-center items-center">
          {navigation.map((nav) => (
            <li key={nav.id}>
              <a
                href={nav.routes}
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
    </>
  );
};
