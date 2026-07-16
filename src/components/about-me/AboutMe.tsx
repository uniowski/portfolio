import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";
import { skillsConfig } from "../../constants/skills";
import type { LocalizedSkill } from "../../types";
import QualificationTooltip from "../ui/QualificationTooltip";
import SkillAccordionItem from "../ui/SkillAccordionItem";
import "./AboutMe.css";

function AboutMe() {
  const { t } = useTranslation();

  const localizedSkills = t("skills", { returnObjects: true }) as Record<string, LocalizedSkill>;

  const renderAllSkills = () => {
    return skillsConfig.map((skillDefinition) => {
      const skill = localizedSkills[skillDefinition.id];

      if (!skill) return null;

      return <SkillAccordionItem key={skillDefinition.id} skillDefinition={skillDefinition} skill={skill} />;
    });
  };

  const tooltipText1 = t("aboutMe.content.qualificationInf02");
  const tooltipText2 = t("aboutMe.content.qualificationInf03");
  const tooltipText3 = t("aboutMe.content.qualificationInf04");

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
              <QualificationTooltip label="Inf.02" tooltipText={tooltipText1} />
              <span className="primary-font-color">, i </span>
              <QualificationTooltip label="Inf.03" tooltipText={tooltipText2} />
              <span className="primary-font-color">, i </span>
              <QualificationTooltip label="Inf.04" tooltipText={tooltipText3} />
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