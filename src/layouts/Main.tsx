import {
  ButtonLink,
  MiniCard,
  ProjectCard,
  TechnologiesSection,
} from "../components";
import { useThemeStore } from "../stores/themeStore";
import { getButtonThemeClasses } from "../helpers/getButtonThemeClasses";
import { projects } from "../data/projectsData";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";

export const Main = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <main className="portfolio-container main flex-1 pt-32 p-5">
      <section id="home" className="home flex flex-col gap-8 m-auto">
        <MiniCard profilePhoto={"/images/profile-photo.webp"}>
          <ButtonLink
            href="https://www.linkedin.com/in/roger-gutierrez-martinez"
            target="_blank"
            rel="noopener noreferrer"
            className={`gap-3 rounded-md h-fit py-1 text-sm font-bold px-5 ${getButtonThemeClasses(
              theme
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
            icon={"/images/icon-phone.svg"}
            href="https://wa.me/+5354849352"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-1 gap-3 ${getButtonThemeClasses(theme)}`}
            imgProps={{ className: "w-6 h-6" }}
          />
          <ButtonLink
            label="GitHub"
            icon={`${
              theme === "dark"
                ? "/images/icon-github-dark.svg"
                : "/images/icon-github.svg"
            }`}
            href="https://github.com/roger2999"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-1 gap-3 ${getButtonThemeClasses(theme)}`}
            imgProps={{ className: "w-6 h-6" }}
          />
        </div>
      </section>
      <section
        id="skills"
        className="skills flex flex-col gap-5 m-auto sm:px-5"
      >
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

      <section id="about" className="about flex flex-col gap-5 px-5 m-auto">
        <h3 className="font-bold">Sobre mi</h3>
        <article className="flex flex-col items-center justify-center gap-10 sm:flex-row">
          <motion.img
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 10, opacity: 0.9, scale: 1.05 }}
            transition={{ duration: 0.6 }}
            src={"/images/profile-photo.webp"}
            width={160}
            height={192}
            loading="eager"
            decoding="async"
            alt="profile-photo"
            className=" object-cover max-w-60 max-h-60 rounded-2xl"
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
    </main>
  );
};
