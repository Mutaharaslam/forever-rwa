import React from "react";
interface DividerProps {
  className?: string; // Optional className prop
}
const Divider: React.FC<DividerProps> = ({ className }) => {
  return <div className={`bg-primary-200 w-full h-[1px] !p-0 container ${className}`} />;
};

export default Divider;
