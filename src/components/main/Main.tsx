import { useTranslation } from 'react-i18next';
import { ProjectSection } from '../../types';
import AboutMe from "../about-me/AboutMe";
import Contact from "../contact-me/Contact";
import MyProject from "../my-projects/MyProjects";

function Main() {
  const { t } = useTranslation();
  const projectsR = t('projects.react', { returnObjects: true }) as ProjectSection;
  const projectsA = t('projects.android', { returnObjects: true }) as ProjectSection;

  return (
    <>
      <AboutMe />
      <MyProject
        data={projectsR}
        pointer="projects-react-js"
      />
      <MyProject
        data={projectsA}
        pointer="projects-android"
      />
      <Contact />
    </>
  );
}

export default Main;