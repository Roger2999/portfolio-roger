//import { useGetTechnologies } from "../../hooks/useGetTechnologies";
import { TechCard } from "../TechCard/TechCard";
import { technologies } from "../../data/stackData";

export const TechnologiesSection = () => {
  //const { data, isLoading, isError, error } = useGetTechnologies();
  return (
    <>
      <p className="text-justify">
        Conjunto de tecnologías que utilizo de forma habitual en el desarrollo
        frontend. Cada una de estas herramientas ha sido seleccionada
        cuidadosamente para garantizar la{" "}
        <strong>eficiencia, calidad y escalabilidad</strong> en los proyectos.
      </p>

      <div className="grid grid-cols-2 gap-5">
        <TechCard title="Lenguage" data={technologies.lenguage} />
        <TechCard title="Library" data={technologies.libraries} />
        <TechCard title="Build tool" data={technologies.buildTools} />
        <TechCard title="UI-Frameworks" data={technologies.uiFrameworks} />
        <TechCard title="React Libreries" data={technologies.reactLibraries} />
        <TechCard title="Package Manager" data={technologies.packageManagers} />
        <TechCard title="Backend as a Service" data={technologies.backend} />
      </div>
    </>
  );
};
