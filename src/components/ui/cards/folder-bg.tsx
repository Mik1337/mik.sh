import type { ClassValue } from "clsx";

interface FolderBgProps {
  className?: string & ClassValue;
  fill: string & {};
}

export default function FolderBg({ className, fill }: FolderBgProps) {
  return (
    <svg
      width="270"
      height="199"
      viewBox="0 0 270 199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M108.971 10.4385C108.971 16.2035 113.644 20.877 119.409 20.877H254.97C262.821 20.877 269.185 27.2409 269.185 35.0913V183.897C269.185 191.747 262.821 198.111 254.97 198.111H14.2144C6.36399 198.111 0 191.747 0 183.897V14.2144C0 6.36399 6.36398 0 14.2144 0H98.5322C104.297 0 108.971 4.67347 108.971 10.4385Z"
        fill={fill}
      />
    </svg>
  );
}
