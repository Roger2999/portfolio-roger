import { cn } from "../../helpers/cn";

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
  const baseClasses =
    "flex justify-center items-center rounded-2xl bg-black/10 border-gray-200 text-gray-800 hover:bg-black/20 active:bg-gray-300 dark:bg-white/30 dark:border-gray-500 dark:text-gray-200 dark:hover:bg-white/30 dark:active:bg-gray-600";
  return (
    <a {...props} className={cn("links-btn", baseClasses, className)}>
      {icon && (
        <img
          src={icon}
          alt="link-icon"
          loading="lazy"
          decoding="async"
          width={24}
          height={24}
          {...imgProps}
          className={cn(
            "flex items-center justify-center",
            imgProps?.className,
          )}
        />
      )}
      {state && (
        <div
          className={cn(
            "rounded-full min-w-3 h-3",
            state === "available" ? "bg-green-400" : "bg-amber-400",
            "animate-ping",
          )}
        />
      )}
      {label && (
        <span className="flex justify-center items-center text-center text-xs">
          {label}
        </span>
      )}
    </a>
  );
};
