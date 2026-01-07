export const NavMenu = () => {
  const navigation = [
    { id: "1", name: "Home" },
    { id: "2", name: "Projects" },
    { id: "3", name: "Skills" },
  ];
  return (
    <>
      <nav className="nav-desktop-container flex justify-center items-center w-125 max-w-[80%] border-2 h-full">
        <ul className="flex gap-8 justify-center items-center">
          {navigation.map((nav) => (
            <li key={nav.id}>
              <a href="#">{nav.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
