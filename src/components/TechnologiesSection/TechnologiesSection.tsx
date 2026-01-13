import { technologies } from "../../data/technologies";

export const TechnologiesSection = () => {
  return (
    <>
      <h2>Tecnologías que domino</h2>
      <div className="flex gap-5 flex-wrap">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="tech-btn bg-indigo-400 min-w-20 text-center rounded-md px-5"
          >
            {tech.name}
          </div>
        ))}
      </div>
    </>
  );
};
