import { ButtonLink, MiniCard, TechnologiesSection } from "../components";
import phoneIcon from "../assets/icon-phone.svg";
import githubIcon from "../assets/icon-github.svg";
import githubDarkIcon from "../assets/icon-github-dark.svg";
import profileIcon from "../assets/profile-photo.webp";
import previewIcon from "../assets/icon-preview-button.png";
import { useThemeStore } from "../stores/themeStore";
import { getButtonThemeClasses } from "../Helpers/getButtonThemeClasses";
import { projects } from "../data/projectsData";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";

export const Main = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <main className="portfolio-container main flex-1 pt-32 p-5">
      <section id="home" className="home flex flex-col gap-8 px-5 m-auto">
        <MiniCard profilePhoto={profileIcon}>
          <ButtonLink
            href="#"
            className={`rounded-md h-fit py-1 text-sm font-bold px-5 ${getButtonThemeClasses(
              theme,
            )}`}
            label="Disponible para trabajar"
          />
        </MiniCard>
        <h1 className="font-bold">¡Hola, soy Roger!</h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          mollitia cum consequatur provident aspernatur sapiente, quam molestias
          veniam perferendis ex blanditiis vel, praesentium velit, cupiditate
          culpa reiciendis odit officiis repudiandae.
        </p>
        <div className="flex gap-8 flex-wrap">
          <ButtonLink
            label="Contactame"
            icon={phoneIcon}
            href="https://wa.me/+5354849352"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-1 gap-3 ${getButtonThemeClasses(theme)}`}
          />
          <ButtonLink
            label="GitHub"
            icon={`${theme === "dark" ? githubDarkIcon : githubIcon}`}
            href="https://github.com/roger2999"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-1 gap-3 ${getButtonThemeClasses(theme)}`}
          />
        </div>
      </section>
      <section id="skills" className="home flex flex-col gap-5 m-auto sm:px-5">
        <TechnologiesSection />
      </section>
      <section
        id="projects"
        className="projects flex flex-col gap-5 px-5 m-auto"
      >
        <h2 className="font-bold">Proyectos</h2>
        {projects.map((p) => (
          <ProjectCard
            title={p.title}
            description={p.description}
            stack={p.stack}
            img={p.image}
            key={p.title}
          />
        ))}
      </section>

      <section id="about" className="home flex flex-col gap-5 px-5 m-auto">
        <h3 className="font-bold">Sobre mi</h3>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          mollitia cum consequatur provident aspernatur sapiente, quam molestias
          veniam perferendis ex blanditiis vel, praesentium velit, cupiditate
          culpa reiciendis odit officiis repudiandae.
        </p>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          mollitia cum consequatur provident aspernatur sapiente, quam molestias
          veniam perferendis ex blanditiis vel, praesentium velit, cupiditate
          culpa reiciendis odit officiis repudiandae.
        </p>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          mollitia cum consequatur provident aspernatur sapiente, quam molestias
          veniam perferendis ex blanditiis vel, praesentium velit, cupiditate
          culpa reiciendis odit officiis repudiandae.
        </p>
        <article className="flex gap-8 flex-wrap">
          <ButtonLink label="Contactame" icon={previewIcon} />
          <ButtonLink label="GitHub" icon={previewIcon} />
        </article>
      </section>
    </main>
  );
};
