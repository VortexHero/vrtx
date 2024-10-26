import type { config } from "./config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faGlobe,
  faShapes,
} from "@fortawesome/free-solid-svg-icons";
import CustomMarkdown from "./CustomMarkdown";
import { faApple, faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectItem({
  project,
  name,
}: {
  project: Partial<
    (typeof config.projects)[number] &
      NonNullable<(typeof config.projects)[number]["projects"]>[number]
  >;
  name: boolean;
}) {
  return (
    <>
      {name ? (
        <>
          <hr className="my-4" />
          <h4 className="mb-4 text-xl font-bold">{project.name}</h4>
        </>
      ) : (
        <></>
      )}
      {project.projects ? (
        <small className="flex w-fit items-center gap-2 rounded-full border px-2">
          <FontAwesomeIcon icon={faShapes} />
          <span>Multiple Projects</span>
        </small>
      ) : (
        <></>
      )}
      {project.web ? (
        <a
          href={project.web}
          target="_blank"
          className="mb-2 flex w-fit items-center gap-2 underline decoration-gray-400 decoration-dotted"
        >
          <FontAwesomeIcon icon={faGlobe} fixedWidth />
          Website
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      ) : (
        <></>
      )}
      {project.ios ? (
        <a
          href={project.ios}
          target="_blank"
          className="mb-2 flex w-fit items-center gap-2 underline decoration-gray-400 decoration-dotted"
        >
          <FontAwesomeIcon icon={faApple} fixedWidth />
          iOS App
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      ) : (
        <></>
      )}
      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          className="mb-2 flex w-fit items-center gap-2 underline decoration-gray-400 decoration-dotted"
        >
          <FontAwesomeIcon icon={faGithub} fixedWidth />
          GitHub Repository
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      ) : (
        <></>
      )}
      {project.description ? (
        <CustomMarkdown text={project.description} />
      ) : (
        <></>
      )}
      {project.projects ? (
        project.projects.map((project, index) => (
          <ProjectItem key={index} project={project} name={true} />
        ))
      ) : (
        <></>
      )}
    </>
  );
}

export default ProjectItem;
