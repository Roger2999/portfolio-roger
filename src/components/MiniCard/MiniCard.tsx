import { cn } from "../../helpers/cn";
import { buttonThemeClasses } from "../../helpers/getButtonThemeClasses";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import profileSecondaryPhoto from "/images/profile-photo-secondary.png";
interface Props {
  profilePhoto?: string;
}
export const MiniCard = ({ profilePhoto }: Props) => {
  return (
    <div className="flex flex-col xs:flex-row items-center gap-5">
      <img
        src={profilePhoto ? profilePhoto : profileSecondaryPhoto}
        width={112}
        height={144}
        loading="eager"
        alt="profile photo"
        className="rounded-full w-28 h-36 bg-cover"
      />
      <ButtonLink
        href="https://www.linkedin.com/in/roger-gutierrez-martinez"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "gap-3 rounded-md h-fit py-1 text-sm font-bold px-5",
          buttonThemeClasses,
        )}
        label="Disponible para trabajar"
        state="available"
      />
    </div>
  );
};
