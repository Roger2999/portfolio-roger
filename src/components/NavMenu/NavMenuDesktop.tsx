import { ThemeButton } from "../../components";
import { cn } from "../../helpers/cn";
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
  return (
    <nav
      className={cn(
        "nav-desktop-container hidden w-125 max-w-full fixed top-10 z-10 sm:flex justify-between items-center h-10 rounded-3xl bg-white/50 backdrop-blur-xs shadow-2xl shadow-gray-800 dark:bg-white/20 dark:border-white/20 dark:shadow-none px-10",
      )}
    >
      <ul className="flex gap-8 justify-center items-center">
        {navigation.map((nav) => (
          <li key={nav.id}>
            <a
              href={`#${nav.routes}`}
              onClick={() => setActiveLink(nav.routes)}
              className={cn(
                "pb-2 font-bold transition-all duration-150 ease",
                activeLink === nav.routes && "text-blue-500",
              )}
              aria-current={activeLink === nav.routes ? "page" : undefined}
            >
              {nav.name}
            </a>
          </li>
        ))}
      </ul>
      <ThemeButton className="w-fit h-fit" />
    </nav>
  );
};
