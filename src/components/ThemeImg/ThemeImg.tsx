import { useThemeStore } from "../../stores/themeStore";
interface Props {
  srcDark: string;
  srcLight: string;
  width: number;
  heigth: number;
}
export const ThemeImg = ({ srcDark, srcLight, width, heigth }: Props) => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <>
      {theme === "dark" ? (
        <img
          src={srcDark}
          width={width}
          height={heigth}
          alt="logo de la web"
          className="logo rounded-full ml-10 bg-cover w-12 h-12"
        />
      ) : (
        <img
          src={srcLight}
          width={width}
          height={heigth}
          alt="logo de la web"
          className="logo rounded-full ml-10 bg-cover w-12 h-12"
        />
      )}
    </>
  );
};
