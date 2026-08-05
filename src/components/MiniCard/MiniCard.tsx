import { ButtonLink } from "../ButtonLink/ButtonLink";
import profileSecondaryPhoto from "/images/profile-photo-secondary.png";
interface Props {
  profilePhoto?: string;
}
export const MiniCard = ({ profilePhoto }: Props) => {
  return (
    <div className="flex flex-col xs:flex-row items-center justify-center gap-5 sm:border sm:border-black/20 rounded-full w-fit xs:pl-2 xs:pr-6 xs:py-2 xs:bg-black/10 xs:overflow-hidden">
      {profilePhoto && (
        <img
          src={profilePhoto ?? profileSecondaryPhoto}
          width={112}
          height={144}
          loading="eager"
          alt="profile photo"
          className="rounded-full w-40 h-40 object-cover"
        />
      )}
      <div className="flex flex-col gap-6">
        <ButtonLink
          target="_blank"
          rel="noopener noreferrer"
          className={"gap-3 rounded-full h-10 py-1 text-sm font-bold px-5"}
          label="Disponible para trabajar"
          state="available"
        />
        <ButtonLink
          href="https://www.linkedin.com/in/roger-gutierrez-martinez"
          target="_blank"
          rel="noopener noreferrer"
          icon="/images/icon-linkedin.svg"
          imgProps={{ className: "w-4 h-4" }}
          className={"gap-2.5 rounded-full h-10 py-1.5 px-5 text-sm font-bold"}
          label="Ver perfil de LinkedIn"
        />
      </div>
    </div>
  );
};
