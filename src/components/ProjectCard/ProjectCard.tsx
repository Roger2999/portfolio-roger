import styles from "./ProjectCard.module.css";

interface Props {
  title: string;
  description: string;
  stack: string[];
  img: string;
}
export const ProjectCard = ({ title, description, stack, img }: Props) => {
  return (
    <div className={styles.projectContainer}>
      <figure className={styles.projectImage}>
        <img
          src={img}
          alt="imagen"
          className="min-w-10 h-full object-cover object-center"
        />
      </figure>
      <div className={styles.projectStack}>
        {stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className={styles.projectInfo}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
