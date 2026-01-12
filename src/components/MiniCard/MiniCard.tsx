interface Props {
  children: React.ReactNode;
  profilePhoto: string;
}
export const MiniCard = ({ children, profilePhoto }: Props) => {
  return (
    <div className="flex items-center gap-5">
      <img src={profilePhoto} width={80} height={80} alt="profile photo" />
      {children}
    </div>
  );
};
