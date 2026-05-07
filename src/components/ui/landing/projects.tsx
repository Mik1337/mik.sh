import { clientWorkProjects } from "@/data/clientwork-projects";
import { cn } from "@/utils";
import Folder from "../cards/folder";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto projects-bg w-full relative flex min-h-svh flex-col items-center justify-start gap-2 z-2"
    >
      <hgroup className="animate-title flex flex-col items-center justify-start gap-2">
        <h2 className="text-6xl text-center font-bold font-pixel-circle text-white opacity-80">
          Projects
        </h2>
        <p className="text-lg text-center font-pixel-square text-white opacity-80">
          Stuff I've built, in no particular order.
        </p>
      </hgroup>
      <div
        className={cn(
          "animate-items",
          "grid grid-cols-2 md:grid-cols-3",
          "gap-x-2 gap-y-8 sm:gap-x-5 sm:gap-y-8",
          "px-4",
          "pt-6 sm:pt-8",
          "mx-auto max-w-4xl w-full",
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
