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
  return (
    <>
      <h3>{title}:</h3>
      <div className="flex gap-0 flex-wrap">
        {data?.map((tech) => (
          <div
            key={tech.name}
            className="tech-btn flex gap-5 min-w-20 text-center border border-gray-400 px-5 py-1 hover:scale-120 transition-transform duration-200 ease font-semibold"
          >
            <img
              className="w-7 h-7"
              src={tech.icon}
              alt={tech.name}
              width={20}
              height={20}
            />
            <span className="flex items-center">{tech.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};
