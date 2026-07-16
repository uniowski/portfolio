import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaGithubSquare } from "react-icons/fa";
import { APPS_LINKS } from "../../constants/links";
import type { ProjectItem } from "../../types";
import "./ProjectDetails.css";

interface ProjectDetailsProps {
  projectData: ProjectItem;
}

function ProjectDetails({ projectData }: ProjectDetailsProps) {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const { t } = useTranslation();
  const projectLinks = APPS_LINKS[projectData.name as keyof typeof APPS_LINKS];

  const tryMyApp = () => {
    if (projectLinks?.deployLink) {
      window.open(projectLinks.deployLink, "_blank");
    }
  };

  const githubRepo = () => {
    if (projectLinks?.repoLink) {
      window.open(projectLinks.repoLink, "_blank");
    }
  };

  return (
    <div className="project-details">
      <h1 className="primary-font-color">{projectData.name}</h1>
      <div className="details-container">
        <div className="details-description">
          {projectData.description.map((description) => (
            <p key={description} className="primary-font-color text-1">
              {description}
            </p>
          ))}
          {projectLinks?.deployLink ? (
            <button className="btn btn-info primary-font-color" onClick={tryMyApp}>
              {t("projectDetails.buttons.tryApp", { projectName: projectData.name })}
            </button>
          ) : null}
          <br />
          {projectLinks?.repoLink ? (
            <button className="btn btn-info primary-font-color" onClick={githubRepo}>
              <FaGithubSquare size={30} />
              {t("projectDetails.buttons.openRepository", { projectName: projectData.name })}
            </button>
          ) : null}
        </div>
        <div className="details-picture-container">
          <a href={`pictures/${projectData.imageLink}`} className="fullImage">
            <img
              src={`pictures/${projectData.imageLink}`}
              alt={`zdjecie przedstawiajace projekt o nazwie ${projectData.imageLink}`}
              className="details-picture"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;