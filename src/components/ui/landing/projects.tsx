import { clientWorkProjects } from "@/data/clientwork-projects";
import { cn } from "@/utils";
import Folder from "../cards/folder";

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects-bg relative z-2 mx-auto flex min-h-svh w-full max-w-7xl flex-col items-center justify-start gap-2"
    >
      <hgroup className="animate-title flex flex-col items-center justify-start gap-2">
        <h2 className="font-pixel-circle text-center text-6xl font-bold text-white opacity-80">
          Projects
        </h2>
        <p className="font-pixel-square text-center text-lg text-white opacity-80">
          Projects I've worked on, in no particular order.
        </p>
      </hgroup>
      <div
        className={cn(
          "animate-items",
          "grid grid-cols-2 md:grid-cols-3",
          "gap-x-2 gap-y-8 sm:gap-x-5 sm:gap-y-8",
          "px-4",
          "pt-6 sm:pt-8",
          "mx-auto w-full max-w-4xl",
          "items-stretch justify-items-center",
        )}
      >
        {clientWorkProjects.map((project) => (
          <Folder
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            media={project.media}
            fill={project.fill}
          />
        ))}
        <Folder
          id="contact"
          title="Your +"
          description="Interesting in working together?"
          media={[]}
          fill="#3F251D"
        />
      </div>
    </section>
  );
}
