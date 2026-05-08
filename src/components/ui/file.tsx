import type { ClassValue } from "clsx";
import { cn } from "@/utils";
import { motion, useReducedMotion } from "motion/react";

interface FileProps {
  type: string;
  className: string & {};
}

export default function File({ type, className }: FileProps) {
  return <div className={cn("w-8 absolute h-10 bg-amber-100 opacity-80", className)}>
   {type} 
  </div>;
}
