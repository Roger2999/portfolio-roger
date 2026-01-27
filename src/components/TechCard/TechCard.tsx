import { useThemeStore } from "../../stores/themeStore";
import { ButtonLink } from "../ButtonLink/ButtonLink";

interface Tech {
  name: string;
  icon: string;
  description: string;
  url: string;
}
interface Props<T extends Tech> {
  title: string;
  data: T[] | undefined;
}
export const TechCard = <T extends Tech>({ title, data }: Props<T>) => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <>
      <div
        className={`techcard-container p-3 rounded-xl shadow-xl bg-gray-100 border-gray-200 ${
          theme === "dark" ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        <h5 className="h-16 sm:h-10">{title}:</h5>
        <div className="tech-content grid grid-cols-2 gap-3">
          {data?.map((tech) => (
            <ButtonLink
              key={tech.name}
              label={tech.name}
              icon={tech.icon}
              className={`tech-btn sm:w-auto flex-col items-center justify-center gap-1  hover:scale-110 rounded-xl py-2 sm:p-3`}
            />
          ))}
        </div>
      </div>
    </>
  );
};
