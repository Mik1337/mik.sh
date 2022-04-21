// footer

export default function Footer() {
  return (
    <div className="footer" align="center">
      <p>~ power by ~</p>
      <div className="iconRow">
        <img
          src="https://raw.githubusercontent.com/Mik1337/Mik1337/main/assests/nextjs-icon.svg"
          alt="Next.js"
          width="48"
          height="48"
          onClick={() => window.open("https://nextjs.org/")}
        />
        <img
          src="https://cdn.svgporn.com/logos/javascript.svg"
          width="48"
          height="48"
          onClick={() => window.open("https://www.javascript.com/")}
        />
        <img
          src="https://cdn.svgporn.com/logos/css-3.svg"
          width="48"
          height="48"
          backgroundColor="white"
          onClick={() => window.open("https://www.w3schools.com/css/")}
        />
        <img
          src="https://raw.githubusercontent.com/Mik1337/Mik1337/main/assests/aws.svg"
          alt="aws"
          width="48"
          height="48"
          onClick={() => window.open("https://aws.amazon.com/")}
        />
        <img
          src="https://cdn.svgporn.com/logos/nodejs-icon.svg"
          alt="Node"
          width="48"
          height="48"
          onClick={() => window.open("https://nodejs.org/en/")}
        />
        <img
          src="https://cdn.svgporn.com/logos/graphql.svg"
          alt="GraphQL"
          width="48"
          height="48"
          onClick={() => window.open("https://graphql.org/")}
        />
        <img
          src="https://cdn.svgporn.com/logos/react.svg"
          alt="React"
          width="48"
          height="48"
          onClick={() => window.open("https://reactjs.org/")}
        />
        <img
          src="https://cdn.svgporn.com/logos/homebrew.svg"
          alt="Homebrew"
          width="48"
          height="48"
          onClick={() => window.open("https://brew.sh/")}
        />
        <img
          src="https://cdn.svgporn.com/logos/yarn.svg"
          alt="yarn"
          width="48"
          height="48"
          onClick={() => window.open("https://yarnpkg.com/")}
        />
        <img
          src="https://cdn.svgporn.com/logos/postgresql.svg"
          width="48"
          height="48"
          onClick={() => window.open("https://www.postgresql.org/")}
        />
        <img
          src="https://cdn.svgporn.com/logos/npm-icon.svg"
          width="48"
          height="48"
          onClick={() => window.open("https://www.npmjs.com/")}
        />
        <img
          src="https://cdn.svgporn.com/logos/visual-studio-code.svg"
          alt="VSC"
          width="48"
          height="48"
          onClick={() => window.open("https://code.visualstudio.com/")}
        />
        <img
          src="https://cdn.svgporn.com/logos/raspberry-pi.svg"
          width="48"
          height="48"
          onClick={() => window.open("https://www.raspberrypi.org/")}
        />
        <img
          src="https://cdn.svgporn.com/logos/bash-icon.svg"
          alt="bash"
          width="48"
          height="48"
          onClick={() => window.open("https://www.gnu.org/")}
        />
        <img
          src="https://cdn.svgporn.com/logos/html-5.svg"
          alt="html"
          width="48"
          height="48"
          onClick={() => window.open("https://www.w3schools.com/html/")}
        />
        <img
          src="https://cdn.svgporn.com/logos/vim.svg"
          alt="aws"
          width="48"
          height="48"
          onClick={() => window.open("https://www.vim.org/")}
        />
        <img
          src="https://cdn.svgporn.com/logos/python.svg"
          alt="python"
          width="48"
          height="48"
          onClick={() => window.open("https://www.python.org/")}
        />
        <img
          src="https://raw.githubusercontent.com/Mik1337/Mik1337/main/assests/macOS.svg"
          alt="macOS"
          width="48"
          height="48"
          onClick={() => window.open("https://www.apple.com/mac/")}
        />
        <img
          src="https://cdn.svgporn.com/logos/github-octocat.svg"
          alt="GitHub"
          width="48"
          height="48"
          onClick={() => window.open("https://www.github.com/Mik1337/")}
        />
      </div>
      <style jsx>{`
        p {
          font-size: 1em;
          margin: 0;
          padding: 1em;
        }
        .footer {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          //   padding: 10px;
          //   margin-top: 10px;
          //   border-radius: 10px;

          font-size: 0.8em;
        }

        .iconRow {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          width: 90%;
          height: 100%;
          margin: 0;
          padding: 0;
          list-style: none;
          font-size: 0;
          line-height: 0;
        }

        img {
          margin: 0;
          padding: 0;
          list-style: none;
          font-size: 0;
          line-height: 0;
        }

        img:hover {
          cursor: pointer;
          transform: scale(1.1);
          //   add animation that rotates half way both sides on hover
          animation: rotate 3s ease-in-out;
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
            scale: 1.5 ease-in;
          }
          25% {
            transform: rotate(45deg);
            scale: 1.5;
          }
          50% {
            transform: rotate(-45deg);
            scale: 1.5;
          }
          100% {
            transform: rotate(0deg);
            scale: 1.5 ease-out;
          }
        }
      `}</style>
    </div>
  );
}
