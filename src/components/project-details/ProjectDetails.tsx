import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaGithubSquare } from "react-icons/fa";
import type { ProjectItem } from "../../types";
import "./ProjectDetails.css";

interface ProjectDetailsProps {
  appData: ProjectItem;
}

function ProjectDetails({ appData }: ProjectDetailsProps) {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const { t } = useTranslation();

  const tryMyApp = () => {
    window.open(appData.simulationLink, "_blank");
  };

  const gitHubApp = () => {
    window.open(appData.gitHubLink, "_blank");
  };

  return (
    <div className="project-details">
      <h1 className="primary-font-color">{appData.name}</h1>
      <div className="details-container">
        <div className="details-description">
          {appData.description.map((description) => (
            <p key={description} className="primary-font-color text-1">
              {description}
            </p>
          ))}
          {appData.simulationLink ? (
            <button className="btn btn-info primary-font-color" onClick={tryMyApp}>
              {`${t('appBtnTxt.tryApp')} ${appData.name}`}
            </button>
          ) : null}
          <br />
          {appData.gitHubLink ? (
            <button className="btn btn-info primary-font-color" onClick={gitHubApp}>
              <FaGithubSquare size={30} />
              {`${t('appBtnTxt.githubRepo1')} ${appData.name} ${t('appBtnTxt.githubRepo2')}`}
            </button>
          ) : null}
        </div>
        <div className="details-picture-container">
          <a href={`pictures/${appData.imageLink}`} className="fullImage">
            <img
              src={`pictures/${appData.imageLink}`}
              alt={`zdjecie przedstawiajace projekt o nazwie ${appData.imageLink}`}
              className="details-picture"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;