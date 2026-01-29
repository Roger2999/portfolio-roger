interface ImgProps extends React.ComponentPropsWithRef<"img"> {
  className?: string;
}
interface ButtonProps extends React.ComponentPropsWithRef<"a"> {
  className?: string;
  label?: string;
  icon?: string;
  state?: "available" | "busy" | undefined;
  imgProps?: ImgProps;
}
export const ButtonLink = ({
  className,
  label,
  icon,
  state,
  imgProps,
  ...props
}: ButtonProps) => {
  const baseClasses = "flex justify-center items-center rounded-2xl";
  return (
    <a {...props} className={`links-btn ${baseClasses} ${className || ""}`}>
      {icon && (
        <img
          src={icon}
          alt="link-icon"
          loading="lazy"
          decoding="async"
          {...imgProps}
          className={`flex items-center justify-center ${imgProps?.className || ""}`}
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
