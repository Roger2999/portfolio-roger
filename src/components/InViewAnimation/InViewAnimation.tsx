import { motion, useInView, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  once?: boolean;
  className?: string;
  margin?: string;
  amount?: number;
  variants?: Variants;
}
export const InViewAnimation = ({
  children,
  className,
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
    margin: "100px 0px 0px 0px",
    amount,
    once,
  });
  return (
    <motion.div
      ref={ref}
      className={className || ""}
      variants={variants || defaultVariants}
      initial="hidden"
      //whileInView="visible"
      viewport={{ once, amount, margin: "100px 0px 0px 0px" }}
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};
