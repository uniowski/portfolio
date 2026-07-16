import * as LucideIcons from "lucide-react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";
import { skillsConfig } from "../../constants/skills";
import type { LocalizedSkill } from "../../types";
import "./AboutMe.css";

function AboutMe() {
  const { t } = useTranslation();

  const localizedSkills = t("skills", { returnObjects: true }) as Record<string, LocalizedSkill>;

  const renderAllSkills = () => {
    return skillsConfig.map((skillDefinition) => {
      const skill = localizedSkills[skillDefinition.id];

      if (!skill) {
        return null;
      }

      const IconComponent = (LucideIcons[skillDefinition.icon as keyof typeof LucideIcons] || LucideIcons.Code) as React.ComponentType<{ className?: string }>;

      return (
        <Card className="m-3" key={skillDefinition.id}>
          <Accordion.Item eventKey={skillDefinition.id}>
            <Accordion.Header>
              <div className="language-icon-wrapper d-flex align-items-center justify-content-center">
                <IconComponent className="primary-font-color" />
              </div>
              <p className="m-3 primary-font-color">{skill.title}</p>
            </Accordion.Header>
            <Accordion.Body>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {skillDefinition.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded text-sm fw-semibold"
                    style={{
                      backgroundColor: "rgba(127, 127, 127, 0.1)",
                      color: "var(--accent-color)",
                      border: "1px solid rgba(127, 127, 127, 0.15)",
                      fontSize: "0.85rem"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="skill-description-points">
                {skill.description.map((point) => (
                  <p key={point} className="m-1 primary-font-color">
                    • {point}
                  </p>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Card>
      );
    });
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
          <Accordion>{renderAllSkills()}</Accordion>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;