import { navigation } from "../../data/navigation";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-sm text-muted">
          © {year} Roger — All rights reserved.
        </div>
        <nav>
          <ul className="flex gap-4 text-sm">
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.routes}`} className="links-btn">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};
