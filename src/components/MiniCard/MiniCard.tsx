import profileSecondaryPhoto from "/images/profile-photo-secondary.png";
interface Props {
  children: React.ReactNode;
  profilePhoto?: string;
}
export const MiniCard = ({ children, profilePhoto }: Props) => {
  return (
    <div className="flex items-center gap-5">
      <img
        src={profilePhoto ? profilePhoto : profileSecondaryPhoto}
        width={175}
        height={240}
        loading="eager"
        alt="profile photo"
        className="rounded-full w-28 h-36 bg-cover"
      />
      {children}
    </div>
  );
};
