import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface OnScrollViewProps {
  className?: string;
  children?: ReactNode;
}

const OnScrollView: React.FC<OnScrollViewProps> = ({ className, children }) => {
  const cardVariants: Variants = {
    offscreen: {
      y: 200,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1.7,
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
