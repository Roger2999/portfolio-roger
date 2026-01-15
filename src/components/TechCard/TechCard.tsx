interface Tech {
  id: string;
  name: string;
}
interface Props<T extends Tech> {
  title: string;
  data: T[] | undefined;
}
export const TechCard = <T extends Tech>({ title, data }: Props<T>) => {
  return (
    <>
      <h3>{title}:</h3>
      <div className="flex gap-5 flex-wrap">
        {data?.map((tech) => (
          <div
            key={tech.id}
            className="tech-btn bg-indigo-400 min-w-20 text-center rounded-md px-5"
          >
            {tech.name}
          </div>
        ))}
      </div>
    </>
  );
};
