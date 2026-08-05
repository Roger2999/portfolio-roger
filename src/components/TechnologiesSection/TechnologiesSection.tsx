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
        cuidadosamente para garantizar la
        <strong> eficiencia, calidad y escalabilidad</strong> en los proyectos.
      </p>

      <div className="grid xs:grid-cols-2 gap-5">
        <TechCard title="Lenguajes" data={technologies.language} />
        <TechCard title="Frameworks" data={technologies.frameworks} />
        <TechCard title="Herramientas de Build" data={technologies.buildTools} />
        <TechCard title="UI Frameworks" data={technologies.uiFrameworks} />
        <TechCard title="Librerías React" data={technologies.reactLibraries} />
        <TechCard title="Gestores de Paquetes" data={technologies.packageManagers} />
        <TechCard title="Backend como Servicio" data={technologies.backend} />
        <TechCard title="Control de Versiones" data={technologies.versionControl} />
      </div>
    </>
  );
};
