import { useGetTechnologies } from "../../hooks/useGetTechnologies";
import { TechCard } from "../TechCard/TechCard";

export const TechnologiesSection = () => {
  const { data, isLoading, isError, error } = useGetTechnologies();
  return (
    <>
      <h2>Tecnologías que domino</h2>
      <div className="flex flex-col gap-5">
        {isLoading ? (
          <p>Cargando...</p>
        ) : isError ? (
          <p>Error: {error?.message}</p>
        ) : (
          <>
            <TechCard title="Lenguajes" data={data?.languages} />
            <TechCard title="Frameworks" data={data?.frameworks} />
            <TechCard title="Librerias" data={data?.libraries} />
          </>
        )}
      </div>
    </>
  );
};
