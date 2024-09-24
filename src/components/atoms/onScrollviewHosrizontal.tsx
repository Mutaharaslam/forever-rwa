import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface OnScrollViewProps {
  className?: string;
  fromLeft?: boolean;
  children?: ReactNode;
}

const OnScrollViewHorizontal: React.FC<OnScrollViewProps> = ({
  className,
  children,
  fromLeft = false,
}) => {
  const cardVariants: Variants = {
    offscreen: {
      x: fromLeft ? -1000 : 1000,
    },
    onscreen: {
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1.5,
      },
    },
  };
  return (
    <motion.div
      className={`${className}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 1 }}
    >
      <motion.div variants={cardVariants}>{children}</motion.div>
    </motion.div>
  );
};

export default OnScrollViewHorizontal;
