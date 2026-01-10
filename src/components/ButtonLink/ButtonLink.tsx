import { useThemeStore } from "../../stores/themeStore";

interface ButtonProps extends React.ComponentPropsWithRef<"a"> {
  className?: string;
  label?: string;
  icon?: string;
}
export const ButtonLink = ({
  className,
  label = "label",
  icon,
  ...props
}: ButtonProps) => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <a
      {...props}
      className={`btn-link flex gap-3 min-w-48 p-1 px-5 rounded-md border ${
        theme === "dark"
          ? "backdrop-blur-md bg-white/30 border-gray-500 hover:bg-white/10 text-gray-200"
          : "backdrop-blur-md bg-black/10 border-gray-200 hover:bg-black/70 hover:text-white text-gray-800"
      } ${className ? className : ""}`}
    >
      <img
        src={icon}
        alt="icono de link"
        loading="lazy"
        decoding="async"
        className="flex items-center justify-center w-8 h-8"
      />
      <span className="flex items-center justify-center">{label}</span>
    </a>
  );
};
