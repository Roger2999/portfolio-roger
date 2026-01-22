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
  const baseClasses = "flex rounded-2xl";
  return (
    <a {...props} className={`links-btn ${baseClasses} ${className || ""}`}>
      {icon && (
        <img
          src={icon}
          alt="icono de link"
          loading="lazy"
          decoding="async"
          className={`flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8`}
        />
      )}
      <span className={`flex justify-center items-center text-center text-xs`}>
        {label}
      </span>
    </a>
  );
};
