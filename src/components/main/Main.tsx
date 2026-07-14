import { useTranslation } from 'react-i18next';
import AboutMe from "../about-me/AboutMe";
import Contact from "../contact-me/Contact";
import MyProject from "../my-projects/MyProjects";

function Main() {
  const { i18n } = useTranslation();
  const db = i18n.getResourceBundle(i18n.resolvedLanguage || 'pl', 'translation');

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