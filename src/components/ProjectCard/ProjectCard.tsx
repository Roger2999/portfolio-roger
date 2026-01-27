import { ButtonLink } from "../ButtonLink/ButtonLink";
import styles from "./ProjectCard.module.css";
import previewIconDark from "../../assets/icon-world-dark.png";
import previewIconLight from "../../assets/icon-world-light.png";
import codeIcon from "../../assets/icon-code.png";
import { useThemeStore } from "../../stores/themeStore";

interface Props {
  title: string;
  description: string;
  stack: string[];
  previewLink: string;
  codeLink: string;
  img: string;
}
export const ProjectCard = ({
  title,
  description,
  stack,
  previewLink,
  codeLink,
  img,
}: Props) => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div className={styles.projectContainer}>
      <a href={previewLink} target="_blank" rel="noopener noreferrer">
        <figure className={`${styles.projectImage} rounded-2xl`}>
          <img
            src={img}
            alt={title}
            aria-label={title}
            loading="lazy"
            decoding="async"
            className="object-cover object-center rounded-2xl"
          />
        </figure>
      </a>
      <div className={styles.projectStack}>
        {stack.map((item) => (
          <span className={styles.stackBtn} key={item}>
            {item}
          </span>
        ))}
      </div>
      <div className={styles.btnContainer}>
        <ButtonLink
          href={previewLink}
          target="_blank"
          rel="noopener noreferrer"
          label="Preview"
          icon={theme === "dark" ? previewIconDark : previewIconLight}
        />
        <ButtonLink
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          label="Código"
          icon={codeIcon}
        />
      </div>
      <div className={`${styles.projectInfo}`}>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};
