import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaGithubSquare } from "react-icons/fa";
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

  const tryMyApp = () => {
    window.open(projectData.simulationLink, "_blank");
  };

  const githubRepo = () => {
    window.open(projectData.gitHubLink, "_blank");
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
          {projectData.simulationLink ? (
            <button className="btn btn-info primary-font-color" onClick={tryMyApp}>
              {`${t('appBtnTxt.tryApp')} ${projectData.name}`}
            </button>
          ) : null}
          <br />
          {projectData.gitHubLink ? (
            <button className="btn btn-info primary-font-color" onClick={githubRepo}>
              <FaGithubSquare size={30} />
              {`${t('appBtnTxt.githubRepo1')} ${projectData.name} ${t('appBtnTxt.githubRepo2')}`}
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