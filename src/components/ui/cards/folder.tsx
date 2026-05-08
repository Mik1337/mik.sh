import type { ClassValue } from "clsx";
import { cn } from "@/utils";
import FolderBg from "./folder-bg";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import File from "@/components/ui/file";

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

  return (
    <Link
      to={`/project/${id}`}
      className={cn(
        "cursor-default relative aspect-270/199 perspective-[880px] transform-3d",
        "w-[170px] max-w-[270px] sm:w-full",
        className,
      )}
    >
      <FolderBg className="absolute z-10 inset-0 size-full" fill={fill} />
      <File className="bottom-10 left-2 w-20 h-20 z-20" />
      {/*<img
        src="https://placehold.co/100x100"
        className="absolute bottom-10 left-2 z-20"
      />*/}
      <motion.div
        initial="rest"
        whileHover="hover"
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "0% 80%",
        }}
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
          "bg-[#FEFEBD]/20 backdrop-blur-[1px]",
          "absolute bottom-[0.63%] left-0 right-0",
          "h-[83.5%] w-full",
          "z-30",
          "rounded-[5.26%]",
        )}
      >
        <div className="h-full relative mix-blend-plus-overlay text-white/80">
          <div className="h-full relative">
            <h2 className="text-base sm:text-xl font-bold  text-center absolute top-[40%] left-0 right-0">
              {title}
            </h2>
            <p className="text-[10px] leading-tight md:text-sm text-center absolute bottom-[10%] left-0 right-0">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
