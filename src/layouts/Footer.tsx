import { navigation } from "../data/navigation";
import { useThemeStore } from "../stores/themeStore";
import gitHubIconDark from "/images/github-original.svg";
import gitHubLight from "/images/icon-github-dark.svg";

export const Footer = () => {
  const year = new Date().getFullYear();
  const { theme } = useThemeStore();
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
      <div className="text-sm text-muted flex justify-center items-center gap-4">
        © {year} Roger — All rights reserved.
        <a
          href="https://github.com/Roger2999/portfolio-roger.git"
          target="_blank"
          rel="noopener noreferrer"
          title={"Repositorio del portfolio"}
        >
          <img
            src={theme === "dark" ? gitHubLight : gitHubIconDark}
            alt="gitHub-icon"
            loading="lazy"
            decoding="async"
            width={40}
            height={40}
            className="overflow-hidden w-8 h-8 hover:scale-110"
          />
        </a>
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
  );
};
