import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface OnScrollViewProps {
  className?: string;
  children?: ReactNode;
}

const OnScrollView: React.FC<OnScrollViewProps> = ({ className, children }) => {
  const cardVariants: Variants = {
    offscreen: {
      y: 500,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  };
  return (
    <motion.div
      className={`block ${className}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 1 }}
    >
      <motion.div className="card" variants={cardVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default OnScrollView;
