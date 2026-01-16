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
        <h3>{title}:</h3>
        <div className="flex items-center justify-around gap-5 flex-wrap">
          {data?.map((tech) => (
            <ButtonLink
              label={tech.name}
              icon={tech.icon}
              className={`tech-btn flex-col items-center justify-center hover:scale-120 rounded-xl h-24 min-w-24 px-1`}
            />
          ))}
        </div>
      </div>
    </>
  );
};
