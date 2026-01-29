import {
  ButtonLink,
  InViewAnimation,
  MiniCard,
  TechnologiesSection,
} from "../components";
import phoneIcon from "../assets/icon-phone.svg";
import githubIcon from "../assets/icon-github.svg";
import arrowLight from "../assets/arrow-light.svg";
import arrowDark from "../assets/arrow-dark.svg";
import githubDarkIcon from "../assets/icon-github-dark.svg";
import profileIcon from "../assets/profile-photo.webp";
import { useThemeStore } from "../stores/themeStore";
import { getButtonThemeClasses } from "../Helpers/getButtonThemeClasses";
import { projects } from "../data/projectsData";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";

export const Main = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <main className="portfolio-container main flex-1 pt-32 p-5">
      <section id="home" className="home flex flex-col gap-8 m-auto">
        <MiniCard profilePhoto={profileIcon}>
          <ButtonLink
            href="#"
            className={`gap-3 rounded-md h-fit py-1 text-sm font-bold px-5 ${getButtonThemeClasses(
              theme,
            )}`}
            label="Disponible para trabajar"
            state="available"
          />
        </MiniCard>
        <h1 className="text-4xl sm:text-5xl">¡Hola, soy Roger!</h1>
        <p className="text-justify">
          Desarrollador Frontend enfocado en construir{" "}
          <strong>interfaces limpias, accesibles y funcionales</strong> con
          <strong> React y TypeScript</strong>, aplicando buenas prácticas y
          aprendizaje continuo.
        </p>
        <div className="flex gap-8 flex-wrap">
          <ButtonLink
            label="Contactame"
            icon={phoneIcon}
            href="https://wa.me/+5354849352"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-1 gap-3 ${getButtonThemeClasses(theme)}`}
            imgProps={{ className: "w-6 h-6" }}
          />
          <ButtonLink
            label="GitHub"
            icon={`${theme === "dark" ? githubDarkIcon : githubIcon}`}
            href="https://github.com/roger2999"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-1 gap-3 ${getButtonThemeClasses(theme)}`}
            imgProps={{ className: "w-6 h-6" }}
          />
        </div>
      </section>
      <section id="skills" className="home flex flex-col gap-5 m-auto sm:px-5">
        <h3>Tecnologías que domino</h3>
        <TechnologiesSection />
      </section>
      <section
        id="projects"
        className="projects flex flex-col gap-5 px-5 m-auto"
      >
        <h3 className="font-bold">Proyectos</h3>
        {projects.map((p) => (
          <ProjectCard
            title={p.title}
            description={p.description}
            stack={p.stack}
            previewLink={p.urlPreview}
            codeLink={p.urlGithub}
            img={p.image}
            key={p.title}
          />
        ))}
      </section>

      <section id="about" className="home flex flex-col gap-5 px-5 m-auto">
        <h3 className="font-bold">Sobre mi</h3>
        <article className="flex flex-col items-center justify-center gap-10 sm:flex-row">
          <img
            src={profileIcon}
            loading="lazy"
            decoding="async"
            alt="profile-photo"
            className=" object-cover w-60 h-60 rounded-2xl"
          />
          <p className="text-justify">
            Me encuentro en un proceso de crecimiento como desarrollador,
            enfocado en fortalecer bases sólidas y aplicar buenas prácticas en
            cada proyecto. Busco aprender de cada experiencia, adaptarme a
            nuevos desafíos y aportar valor con soluciones claras y bien
            estructuradas.
          </p>
        </article>
      </section>
      <InViewAnimation
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      >
        <ButtonLink
          role="button"
          icon={theme === "light" ? arrowDark : arrowLight}
          href="#"
          className="fixed bottom-10 right-10 opacity-40"
          imgProps={{ className: "w-20 h-20" }}
        />
      </InViewAnimation>
    </main>
  );
};
