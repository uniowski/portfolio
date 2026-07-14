import type { PortfolioDb } from "../../types";
import AboutMe from "../about-me/AboutMe";
import Contact from "../contact-me/Contact";
import MyProject from "../my-projects/MyProjects";

interface MainProps {
  db: PortfolioDb;
}

function Main({ db }: MainProps) {
  return (
    <>
      <AboutMe
        sectionTitle={db.textSections.aboutMeText}
        languageSkills={db.languageSkills}
        textSecAboutMe={db.textSecAboutMe}
      />
      <MyProject
        sectionTitle={db.textSections.reactProjectsText}
        itemList={db.reactJsProjects}
        pointer="projects-react-js"
      />
      <MyProject
        sectionTitle={db.textSections.androidProjectsText}
        itemList={db.androidProjects}
        pointer="projects-android"
      />
      <Contact sectionTitle={db.textSections.contactText} textSecContact={db.textSecContact} />
    </>
  );
}

export default Main;