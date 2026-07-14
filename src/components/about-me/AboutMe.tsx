import Accordion from "react-bootstrap/Accordion";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import type { LanguageSkill, TextSecAboutMe } from "../../types";
import "./AboutMe.css";

interface AboutMeProps {
  sectionTitle: string;
  languageSkills: LanguageSkill[];
  textSecAboutMe: TextSecAboutMe;
}

function AboutMe({ sectionTitle, languageSkills, textSecAboutMe }: AboutMeProps) {
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
      <strong>INF.02</strong> {textSecAboutMe.inf02text}
    </Tooltip>
  );
  const tooltip2 = (
    <Tooltip id="tooltip">
      <strong>INF.03</strong> {textSecAboutMe.inf03text}
    </Tooltip>
  );
  const tooltip3 = (
    <Tooltip id="tooltip">
      <strong>INF.04</strong> {textSecAboutMe.inf04text}
    </Tooltip>
  );

  return (
    <div className="about-me" id="o-mnie">
      <h2 className="primary-font-color">{sectionTitle}</h2>
      <div className="cv-container">
        <div className="name-section">
          <h1 className="primary-font-color name-line">
            {textSecAboutMe.myNameis}
            <span className="accent-font-color no-wrap">Dawid Uniowski</span>
          </h1>

          <p className="primary-font-color">
            {textSecAboutMe.helloTxt1}
            <span className="accent-font-color">{textSecAboutMe.helloTxt2}</span>{" "}
            {textSecAboutMe.helloTxt3}
            <span className="accent-font-color">{textSecAboutMe.helloTxt4}</span>.
          </p>
          <p className="primary-font-color">
            {textSecAboutMe.helloTxt5}
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
          <h2 className="my-4 primary-font-color">{textSecAboutMe.mySkills}:</h2>
          <Accordion>{skills()}</Accordion>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;