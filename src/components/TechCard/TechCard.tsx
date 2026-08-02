import { ButtonLink } from "../ButtonLink/ButtonLink";
import { InViewAnimation } from "../../components";
import { cn } from "../../helpers/cn";

interface Tech {
  name: string;
  icon: string;
}
interface Props<T extends Tech> {
  title: string;
  data: T[] | undefined;
}
export const TechCard = <T extends Tech>({ title, data }: Props<T>) => {
  return (
    <InViewAnimation>
      <div
        className={cn(
          "techcard-container p-3 rounded-xl shadow-xl bg-gray-200 border-gray-200 dark:bg-gray-800"
        )}
      >
        <h5 className="h-16 sm:h-10">{title}:</h5>
        <div className="tech-content grid grid-cols-2 gap-3">
          {data?.map((tech) => (
            <ButtonLink
              key={tech.name}
              label={tech.name}
              icon={tech.icon}
              className="tech-btn sm:w-auto flex-col items-center justify-center gap-1 hover:scale-110 rounded-xl py-2 sm:p-3"
              imgProps={{ className: "w-6 h-6" }}
            />
          ))}
        </div>
      </div>
    </InViewAnimation>
  );
};
