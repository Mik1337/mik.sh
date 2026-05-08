import { useParams } from "react-router-dom";
import { clientWorkProjects } from "@/data/clientwork-projects";
import { cn } from "@/utils";
import Folder from "@/components/ui/cards/folder";

export default function ProjectIdPage() {
  const { id } = useParams();

  const project = clientWorkProjects.find((project) => project.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section
      id="project-id"
      className="projects-bg relative z-2 mx-auto flex min-h-svh w-full flex-col items-start justify-start gap-2 px-4 pt-8 sm:max-w-7xl sm:px-8"
    >
      <div className="borderitems-start flex w-full flex-row justify-start gap-2 sm:gap-8">
        <Folder
          id={project.id}
          title={project.title}
          description={""}
          media={project.media}
          fill={project.fill}
        />
        <hgroup className="animate-title flex max-w-full flex-col items-start justify-start gap-2 pt-4 sm:pt-8">
          <h2 className="font-pixel-circle text-left text-4xl font-bold text-white opacity-80 sm:text-6xl">
            {project.title}
          </h2>
          <p className="font-pixel-square text-left text-sm text-balance text-white opacity-80 sm:text-lg">
            {project.description}
          </p>
        </hgroup>
      </div>
    </section>
  );
}
