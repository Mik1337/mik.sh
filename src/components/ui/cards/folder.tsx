import type { ClassValue } from "clsx";
import { cn } from "@/utils";
import FolderBg from "./folder-bg";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
// import File from "@/components/ui/file";

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
  className,
}: FolderProps) {
  const reduceMotion = useReducedMotion();

  return (
    <article
      className={cn(
        "relative aspect-270/199 cursor-default perspective-[880px] transform-3d",
        "w-[170px] max-w-[270px] sm:w-full",
        className,
      )}
    >
      <FolderBg className="absolute inset-0 z-10 size-full" fill={fill} />
      {/* <File className="bottom-10 left-2 w-20 h-20 z-20" /> */}
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
          "absolute right-0 bottom-[0.63%] left-0",
          "h-[83.5%] w-full",
          "z-30",
          "rounded-[5.26%]",
        )}
      >
        <div className="mix-blend-plus-overlay relative h-full text-white/80">
          <div className="relative h-full">
            <h2 className="absolute top-[40%] right-0 left-0 text-center text-base font-bold sm:text-xl">
              {title}
            </h2>
            <p className="absolute right-0 bottom-[10%] left-0 text-center text-[10px] leading-tight md:text-sm">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </article>
  );
}
