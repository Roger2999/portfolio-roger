//import { useGetTechnologies } from "../../hooks/useGetTechnologies";
import { TechCard } from "../TechCard/TechCard";
import { technologies } from "../../data/stackData";
export const TechnologiesSection = () => {
  //const { data, isLoading, isError, error } = useGetTechnologies();
  return (
    <>
      <h2>Tecnologías que domino</h2>
      <div className="flex flex-col gap-1">
        <TechCard title="Lenguajes" data={technologies.lenguage} />
        <TechCard title="Framework" data={technologies.frameworks} />
        <TechCard title="Build" data={technologies.buildTools} />
        <TechCard title="UI-Frameworks" data={technologies.uiFrameworks} />
        <TechCard title="Librerias" data={technologies.reactLibraries} />
        <TechCard title="Validación" data={technologies.validationLibraries} />
        <TechCard title="Paquetes" data={technologies.packageManagers} />
        {/* {isLoading ? (
          <p>Cargando...</p>
        ) : isError ? (
          <p>Error: {error?.message}</p>
        ) : (
          <>
            <TechCard title="Lenguajes" data={data?.languages} />
            <TechCard title="Frameworks" data={data?.frameworks} />
            <TechCard title="Librerias" data={data?.libraries} />
          </>
        )} */}
      </div>
    </>
  );
};
