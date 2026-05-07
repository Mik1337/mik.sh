import type { ClassValue } from "clsx";
import { cn } from "@/utils";
import FolderBg from "./folder-bg";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

interface FolderProps {
  title: string;
  description: string;
  media: string[]; // static image URLs only
  fill: string & {};
  className?: string & ClassValue;
  id: string;
}

export default function Folder({
  title,
  description,
  fill,
  id,
  className,
}: FolderProps) {
  const reduceMotion = useReducedMotion();

  const w = "w-[170px] sm:w-full";

  return (
    <Link
      to={`/project/${id}`}
      className={cn(
        "cursor-default h-[200px] relative perspective-[880px] transform-3d",
        "max-w-[270px] max-h-[199px]",
        w,
        className,
      )}
    >
      <FolderBg className={w} fill={fill} />
      <motion.div
        initial="rest"
        whileHover="hover"
        style={{ transformStyle: "preserve-3d", transformOrigin: "0% 80%" }}
        variants={{
          rest: {
            z: 0,
            rotateX: 0,
            transition: { duration: 0.1 },
          },
          hover: reduceMotion
            ? { transition: { duration: 0.2 } }
            : {
                z: 10,
                rotateX: -10,
                transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
              },
        }}
        className={cn(
          `border-0.5 border-[${fill}]/40`,
          "bg-[#FEFEBD]/20 backdrop-blur-sm",
          "absolute bottom-9 sm:bottom-[1.25px] left-0 right-0",
          "max-w-[270px]",
          "rounded-[14.21px] h-[104px] sm:h-[166.13px]",
        )}
      >
        <div className="h-full relative mix-blend-plus-overlay text-white/80">
          <h2 className="text-base sm:text-xl font-bold  text-center absolute top-[40%] left-0 right-0">
            {title}
          </h2>
          <p className="text-[10px] leading-tight md:text-sm text-center absolute bottom-[10%] left-0 right-0">
            {description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
