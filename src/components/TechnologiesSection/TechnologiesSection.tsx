//import { useGetTechnologies } from "../../hooks/useGetTechnologies";
import { TechCard } from "../TechCard/TechCard";
import { technologies } from "../../data/stackData";
export const TechnologiesSection = () => {
  //const { data, isLoading, isError, error } = useGetTechnologies();
  return (
    <>
      <h2>Tecnologías que domino</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In rem at iure
        eveniet hic quam, consectetur, aliquid quasi minus perferendis vitae
        assumenda impedit maiores debitis quibusdam porro! Voluptatem, fugiat
        sed.
      </p>
      <div className="flex flex-wrap gap-5">
        <TechCard title="Lenguage" data={technologies.lenguage} />
        <TechCard title="Library" data={technologies.libraries} />
        <TechCard title="Build tool" data={technologies.buildTools} />
        <TechCard title="UI-Frameworks" data={technologies.uiFrameworks} />
        <TechCard title="React Libreries" data={technologies.reactLibraries} />

        <TechCard title="Package Manager" data={technologies.packageManagers} />
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
