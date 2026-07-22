import Accordion from "react-bootstrap/Accordion";
import { Trans, useTranslation } from "react-i18next";
import { skillsConfig } from "../../constants/skills";
import type { LocalizedSkill } from "../../types";
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
            <Trans
              i18nKey="aboutMe.name"
              components={{
                accent: <span className="accent-font-color no-wrap" />
              }}
            />
          </h1>

          <p className="primary-font-color text-lg leading-relaxed">
            <Trans
              i18nKey="aboutMe.paragraph1"
              components={{
                accent: <span className="accent-font-color font-semibold" />,
                bold: <span className="text-slate-100 font-bold" />
              }}
            />
          </p>

          <div className="space-y-3">
            <p className="primary-font-color text-lg leading-relaxed">
              <Trans
                i18nKey="aboutMe.paragraph2"
                components={{
                  bold: <span className="text-slate-100 font-semibold" />,
                  sector: <span className="qualification primary-font-color" />
                }}
              />
            </p>

            <p className="primary-font-color text-lg leading-relaxed">
              {t("aboutMe.paragraph3")}
            </p>
          </div>
        </div>

        <div className="picture-section">
          <img
            src="/icons/dawiduniowskiportret.webp"
            alt="Zdjecie portretowe"
            loading="lazy"
            className="profile-picture"
          />
        </div>

        <div className="language-section">
          <h2 className="my-3 primary-font-color">{t("aboutMe.mySkills")}</h2>
          <div className="skill-container">
            <Accordion>{renderAllSkills()}</Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;