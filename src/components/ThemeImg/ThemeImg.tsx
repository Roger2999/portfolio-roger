import { useThemeStore } from "../../stores/themeStore";
interface Props {
  srcDark: string;
  srcLight: string;
  width: number;
  height: number;
}
export const ThemeImg = ({ srcDark, srcLight, width, height }: Props) => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <img
      src={theme === "dark" ? srcDark : srcLight}
      width={width}
      height={height}
      alt="logo de la web"
      className="logo relative top-5 rounded-full ml-10 bg-cover w-12 h-12"
      loading="eager"
      decoding="async"
    />
  );
};
