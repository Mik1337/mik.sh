import { clientWorkProjects } from "@/data/clientwork-projects";
import Folder from "../cards/folder";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto projects-bg w-full relative flex min-h-svh flex-col items-center justify-start gap-2 z-2"
    >
      <hgroup className="flex flex-col items-start justify-start gap-2">
        <h2 className="text-6xl text-center font-bold font-pixel-circle text-white opacity-80">
          Projects
        </h2>
        <p className="text-lg text-left font-pixel-square text-white opacity-80">
          Stuff I've built, in no particular order.
        </p>
      </hgroup>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full items-stretch justify-start">
        {clientWorkProjects.map((project) => (
          <Folder
            key={project.id}
            title={project.title}
            description={project.description}
            media={project.media}
          />
        ))}
      </div>
    </section>
  );
}
