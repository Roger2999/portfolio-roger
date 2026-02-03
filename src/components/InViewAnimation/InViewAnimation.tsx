import { motion, useInView, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";
interface Props {
  children: ReactNode;
  once?: boolean;
  className?: string;
  margin?: `${number}px ${number}px ${number}px ${number}px` | undefined;
  amount?: number;
  variants?: Variants;
}
export const InViewAnimation = ({
  children,
  className,
  margin = "100px 0px 0px 0px",
  variants,
  amount = 0.1,
  once = false,
}: Props) => {
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 20 },
    },
  };
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin,
    amount,
    once,
  });
  return (
    <motion.div
      ref={ref}
      className={className || ""}
      variants={variants || defaultVariants}
      initial="visible"
      animate={isInView ? "visible" : "hidden"}
      exit={"hidden"}
    >
      {children}
    </motion.div>
  );
};
