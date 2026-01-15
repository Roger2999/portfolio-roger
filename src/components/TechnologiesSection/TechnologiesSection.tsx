import { useGetTechnologies } from "../../hooks/useGetTechnologies";

export const TechnologiesSection = () => {
  const { data, isLoading, isError, error } = useGetTechnologies();
  return (
    <>
      <h2>Tecnologías que domino</h2>
      <div className="flex gap-5 flex-wrap">
        {isLoading ? (
          <p>Cargando...</p>
        ) : isError ? (
          <p>Error: {error?.message}</p>
        ) : (
          data?.frameworks?.map((tech) => (
            <div
              key={tech.id}
              className="tech-btn bg-indigo-400 min-w-20 text-center rounded-md px-5"
            >
              {tech.name}
            </div>
          ))
        )}
      </div>
    </>
  );
};
