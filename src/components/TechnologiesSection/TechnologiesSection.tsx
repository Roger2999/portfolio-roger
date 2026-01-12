export const TechnologiesSection = () => {
  const technologies = [
    "TypeScript",
    "React",
    "Css Modules",
    "Tailwindcss",
    "Bootstrap",
    "Material UI",
    "DaisyUI",
    "Vite",
    "npm",
    "pnpm",
    "bun",
    "Tanstack Query",
    "React Router Dom",
  ];
  return (
    <>
      <h2>Tecnologías que domino</h2>
      <div className="flex gap-5 flex-wrap">
        {technologies.map((tech) => (
          <div className="border bg-red-400 min-w-20 text-center rounded-md px-5">
            {tech}
          </div>
        ))}
      </div>
    </>
  );
};
