import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-bg w-full relative flex min-h-svh flex-col items-center justify-center gap-2 z-2">
      <hgroup className="flex flex-col text-white drop-shadow-2xs opacity-80 items-center justify-center">
        <h1 className="text-7xl tracking-wide font-semibold p-0 m-0">MIK</h1>
        <h2 className="text-3xl tracking-tighter text-center -mt-2 font-bold p-0 m-0">
          SANTOSH
        </h2>
      </hgroup>
      <div className="flex relative items-center justify-start gap-2">
        <motion.p
          className="text-xl inline-block font-pixel-square text-white opacity-90"
          initial={reduceMotion ? false : { clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease: [0.22, 1, 0.36, 1],
            delay: reduceMotion ? 0 : 0.12,
          }}
        >
          I'm a freelance design engineer.
        </motion.p>
        <Block />
      </div>
      <div
        id="social"
        className="flex flex-row items-center justify-center gap-4"
      >
        <a
          href="https://github.com/Mik1337"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github
            width={24}
            height={24}
            fill="#fff"
            className="hover:scale-104 active:scale-98 opacity-90 hover:opacity-100 transition-all duration-300"
          />
        </a>
        <a
          href="https://x.com/AvocadoMik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter
            width={24}
            height={24}
            fill="#fff"
            className="hover:scale-104 active:scale-98 opacity-90 hover:opacity-100 transition-all duration-300"
          />
        </a>
        <a
          href="https://bsky.app/profile/mik.sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Bluesky
            width={24}
            height={24}
            fill="#fff"
            className="hover:scale-104 active:scale-98 opacity-90 hover:opacity-100 transition-all duration-300"
          />
        </a>
        <a
          href="mailto:workwithme@mik.sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email
            width={24}
            height={24}
            fill="#fff"
            className="hover:scale-104 active:scale-98 opacity-90 hover:opacity-100 transition-all duration-300"
          />
        </a>
      </div>
    </section>
  );
}

function Block() {
  return <div className="w-2 h-4 bg-white opacity-90 animate-blink" />;
}

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string & {};
}

function Github({
  width = 24,
  height = 24,
  fill = "#fff",
  className,
}: IconProps) {
  return (
    <svg
      id="github"
      style={{ width, height }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
      className={className}
    >
      <polygon points="23 9 23 15 22 15 22 17 21 17 21 19 20 19 20 20 19 20 19 21 18 21 18 22 16 22 16 23 15 23 15 18 14 18 14 17 15 17 15 16 17 16 17 15 18 15 18 14 19 14 19 9 18 9 18 6 16 6 16 7 15 7 15 8 14 8 14 7 10 7 10 8 9 8 9 7 8 7 8 6 6 6 6 9 5 9 5 14 6 14 6 15 7 15 7 16 9 16 9 18 7 18 7 17 6 17 6 16 4 16 4 17 5 17 5 19 6 19 6 20 9 20 9 23 8 23 8 22 6 22 6 21 5 21 5 20 4 20 4 19 3 19 3 17 2 17 2 15 1 15 1 9 2 9 2 7 3 7 3 5 4 5 4 4 5 4 5 3 7 3 7 2 9 2 9 1 15 1 15 2 17 2 17 3 19 3 19 4 20 4 20 5 21 5 21 7 22 7 22 9 23 9" />
    </svg>
  );
}

function Twitter({
  width = 24,
  height = 24,
  fill = "#fff",
  className,
}: IconProps) {
  return (
    <svg
      id="twitter"
      style={{ width, height }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
      className={className}
    >
      <rect x="22" y="5" width="1" height="1" />
      <rect x="22" y="3" width="1" height="1" />
      <polygon points="21 5 21 6 22 6 22 7 21 7 21 12 20 12 20 14 19 14 19 16 18 16 18 17 17 17 17 18 16 18 16 19 14 19 14 20 11 20 11 21 4 21 4 20 2 20 2 19 1 19 1 18 3 18 3 19 6 19 6 18 7 18 7 17 5 17 5 16 4 16 4 15 3 15 3 14 5 14 5 13 3 13 3 12 2 12 2 10 4 10 4 9 3 9 3 8 2 8 2 4 3 4 3 5 4 5 4 6 5 6 5 7 7 7 7 8 10 8 10 9 12 9 12 5 13 5 13 4 14 4 14 3 19 3 19 4 22 4 22 5 21 5" />
    </svg>
  );
}

function Bluesky({
  width = 24,
  height = 24,
  fill = "#fff",
  className,
}: IconProps) {
  return (
    <svg
      id="bluesky"
      style={{ width, height }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill={fill}
    >
      <path d="M23 3V11H22V13H20V14H18V15H20V16H21V19H20V20H19V21H17V22H15V21H14V20H13V18H11V20H10V21H9V22H7V21H5V20H4V19H3V16H4V15H6V14H4V13H2V11H1V3H2V2H4V3H6V4H7V5H8V6H9V7H10V9H11V10H13V9H14V7H15V6H16V5H17V4H18V3H20V2H22V3H23Z" />
    </svg>
  );
}

function Email({
  width = 24,
  height = 24,
  fill = "#fff",
  className,
}: IconProps) {
  return (
    <svg
      id="envelope-solid"
      style={{ width, height }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
      className={className}
    >
      <polygon points="21 4 21 5 20 5 20 6 19 6 19 7 18 7 18 8 17 8 17 9 16 9 16 10 15 10 15 11 14 11 14 12 13 12 13 13 11 13 11 12 10 12 10 11 9 11 9 10 8 10 8 9 7 9 7 8 6 8 6 7 5 7 5 6 4 6 4 5 3 5 3 4 21 4" />
      <polygon points="23 5 23 19 22 19 22 20 2 20 2 19 1 19 1 5 3 5 3 6 4 6 4 7 5 7 5 8 6 8 6 9 7 9 7 10 8 10 8 11 9 11 9 12 10 12 10 13 11 13 11 14 13 14 13 13 14 13 14 12 15 12 15 11 16 11 16 10 17 10 17 9 18 9 18 8 19 8 19 7 20 7 20 6 21 6 21 5 23 5" />
    </svg>
  );
}
