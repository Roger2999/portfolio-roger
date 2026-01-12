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
  return (
    <a
      {...props}
      className={`btn-link flex gap-3 p-1 px-5 border rounded-2xl ${
        className || ""
      }`}
    >
      {icon && (
        <img
          src={icon}
          alt="icono de link"
          loading="lazy"
          decoding="async"
          className="flex items-center justify-center w-8 h-8"
        />
      )}

      <span className="flex items-center justify-center">{label}</span>
    </a>
  );
};
