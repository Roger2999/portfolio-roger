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
      <figure className={`${styles.projectImage} rounded-2xl`}>
        <img
          src={img}
          alt="imagen"
          className="object-cover object-center rounded-2xl"
        />
      </figure>
      <div className={styles.projectStack}>
        {stack.map((item) => (
          <span className={styles.stackBtn} key={item}>
            {item}
          </span>
        ))}
      </div>
      <div className={`${styles.projectInfo}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
