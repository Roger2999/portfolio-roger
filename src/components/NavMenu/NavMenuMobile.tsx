interface NavMenuMobileProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
  navigation: { id: string; name: string; routes: string }[];
}
export const NavMenuMobile = ({
  activeLink,
  setActiveLink,
  navigation,
}: NavMenuMobileProps) => {
  return (
    <div className="overlay-menu fixed top-0 right-0 h-dvh w-dvw z-10 backdrop-blur-xs ">
      <nav className="nav-mobile-menu fixed right-0 h-full w-50 max-w-[80%] bg-gray-200 sm:hidden">
        <ul className="flex flex-col pt-28 gap-8 justify-center items-start pl-10">
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
    </div>
  );
};
