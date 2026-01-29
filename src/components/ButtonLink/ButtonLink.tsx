interface ButtonProps extends React.ComponentPropsWithRef<"a"> {
  className?: string;
  label?: string;
  icon?: string;
  imgWidth?: string;
  imgHeigth?: string;
  state?: "available" | "busy" | undefined;
}
export const ButtonLink = ({
  className,
  label,
  icon,
  state,
  imgHeigth = "6",
  imgWidth = "6",
  ...props
}: ButtonProps) => {
  const baseClasses = "flex rounded-2xl";
  return (
    <a {...props} className={`links-btn ${baseClasses} ${className || ""}`}>
      {icon && (
        <img
          src={icon}
          alt="icono de link"
          loading="lazy"
          decoding="async"
          className={`flex items-center justify-center w-${imgWidth} h-${imgHeigth}`}
        />
      )}
      {state && (
        <div
          className={`rounded-full min-w-3 h-3 ${
            state === "available" ? "bg-green-400" : "bg-amber-400"
          } animate-ping`}
        />
      )}
      {label && (
        <span
          className={`flex justify-center items-center text-center text-xs`}
        >
          {label}
        </span>
      )}
    </a>
  );
};
