import { ButtonLink } from "../ButtonLink/ButtonLink";
import styles from "./ProjectCard.module.css";
import previewIconDark from "/images/icon-world-dark.png";
import previewIconLight from "/images/icon-world-light.png";
import codeIcon from "/images/icon-code.png";
import { useThemeStore } from "../../stores/themeStore";
import { InViewAnimation } from "../../components";

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
    <InViewAnimation className={styles.projectContainer}>
      <a href={previewLink} target="_blank" rel="noopener noreferrer">
        <figure className={`${styles.projectImage} rounded-2xl`}>
          <img
            src={img}
            width={300}
            height={200}
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
          imgProps={{ className: "w-6 h-6" }}
        />
        <ButtonLink
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          label="Código"
          icon={codeIcon}
          imgProps={{ className: "w-6 h-6" }}
        />
      </div>
      <div className={`${styles.projectInfo}`}>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </InViewAnimation>
  );
};
