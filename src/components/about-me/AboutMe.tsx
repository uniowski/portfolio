import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";
import type { LanguageSkill } from "../../types";
import "./AboutMe.css";

function AboutMe() {
  const { t } = useTranslation();

  const languageSkills = t("skills", { returnObjects: true }) as LanguageSkill[];

  const skills = () => {
    return languageSkills.map((language, index) => (
      <Card className="m-3" key={language.name}>
        <Accordion.Item eventKey={`${index}`}>
          <Accordion.Header>
            <img
              src={`icons/${language.icon}`}
              alt={`ikona jezyka programowania - ${language.name}`}
              className="language-icon"
            />
            <p className="m-3 primary-font-color">{language.name}</p>
          </Accordion.Header>
          <Accordion.Body>
            {language.skills.map((skill) => (
              <p key={skill} className="m-1 primary-font-color">
                {skill}
              </p>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Card>
    ));
  };

  const tooltip1 = (
    <Tooltip id="tooltip">
      <strong>INF.02</strong> {t("aboutMe.content.qualificationInf02")}
    </Tooltip>
  );
  const tooltip2 = (
    <Tooltip id="tooltip">
      <strong>INF.03</strong> {t("aboutMe.content.qualificationInf03")}
    </Tooltip>
  );
  const tooltip3 = (
    <Tooltip id="tooltip">
      <strong>INF.04</strong> {t("aboutMe.content.qualificationInf04")}
    </Tooltip>
  );

  return (
    <div className="about-me" id="o-mnie">
      <h2 className="primary-font-color">{t("navigation.sections.aboutMe")}</h2>
      <div className="cv-container">
        <div className="name-section">
          <h1 className="primary-font-color name-line">
            {t("aboutMe.content.myNameIs")}
            <span className="accent-font-color no-wrap">Dawid Uniowski</span>
          </h1>

          <p className="primary-font-color">
            {t("aboutMe.content.iAm")}
            <span className="accent-font-color">{t("aboutMe.content.jobTitle")}</span>{" "}
            {t("aboutMe.content.and")}
            <span className="accent-font-color">{t("aboutMe.content.secondaryRole")}</span>.
          </p>
          <p className="primary-font-color">
            {t("aboutMe.content.learningIntro")}
            <span className="no-wrap primary-font-color">
              <OverlayTrigger placement="bottom" overlay={tooltip1}>
                <span className="qualification primary-font-color">Inf.02</span>
              </OverlayTrigger>
              <span className="primary-font-color">, i </span>
              <OverlayTrigger placement="bottom" overlay={tooltip2}>
                <span className="qualification primary-font-color">Inf.03</span>
              </OverlayTrigger>
              <span className="primary-font-color">, i </span>
              <OverlayTrigger placement="bottom" overlay={tooltip3}>
                <span className="qualification primary-font-color">Inf.04</span>
              </OverlayTrigger>
              <span className="primary-font-color">.</span>
            </span>
          </p>
        </div>

        <div className="picture-section">
          <img
            src="/icons/dawiduniowskiportret.png"
            alt="Zdjecie portretowe przedstawiajace Dawida Uniowskiego"
            loading="lazy"
            className="profile-picture"
          />
        </div>

        <div className="language-section">
          <h2 className="my-4 primary-font-color">{t("aboutMe.content.mySkills")}:</h2>
          <Accordion>{skills()}</Accordion>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;