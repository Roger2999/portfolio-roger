import { useThemeStore } from "../../stores/themeStore";
interface NavMenuProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
  navigation: { id: string; name: string; routes: string }[];
}
export const NavMenuDesktop = ({
  activeLink,
  setActiveLink,
  navigation,
}: NavMenuProps) => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <nav
      className={`nav-desktop-container hidden fixed top-10 z-10 sm:flex justify-center items-center w-125 max-w-[60%] h-10 rounded-3xl ${
        theme === "dark"
          ? "bg-white/20 border-white/20 backdrop-blur-xs"
          : "bg-white/50 backdrop-blur-xs shadow-2xl shadow-gray-800"
      }`}
    >
      <ul className="flex gap-8 justify-center items-center">
        {navigation.map((nav) => (
          <li key={nav.id}>
            <a
              href={`#${nav.routes}`}
              onClick={() => setActiveLink(nav.routes)}
              className={`pb-2 transition-all duration-150 ease ${
                activeLink === nav.routes ? "text-blue-500" : ""
              }`}
              aria-current={activeLink === nav.routes ? "page" : undefined}
            >
              {nav.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
