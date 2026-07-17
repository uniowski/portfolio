import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ThankYouPage from "./components/contact-me/ThankYouPage";
import Layout from "./components/layout/Layout";
import Main from "./components/main/Main";
import ProjectDetails from "./components/project-details/ProjectDetails";
import { ProjectSection } from "./types";

function App() {
  const { t } = useTranslation();
  const reactJsProjects = t('projects.react', { returnObjects: true }) as ProjectSection;
  const androidProjects = t('projects.android', { returnObjects: true }) as ProjectSection;

  const [isThemeDark, setIsThemeDark] = useState<boolean>(true);

  useEffect(() => {
    const checkDarkMode = () => {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setIsThemeDark(true);
        document.body.classList.remove("light-theme", "dark-theme");
        document.body.classList.add("dark-theme");
      } else {
        setIsThemeDark(false);
        document.body.classList.remove("light-theme", "dark-theme");
        document.body.classList.add("light-theme");
      }
    };

    checkDarkMode();

    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if (darkModeMediaQuery.addEventListener) {
      darkModeMediaQuery.addEventListener("change", checkDarkMode);
    } else {
      darkModeMediaQuery.addListener(checkDarkMode);
    }

    return () => {
      if (darkModeMediaQuery.removeEventListener) {
        darkModeMediaQuery.removeEventListener("change", checkDarkMode);
      } else {
        darkModeMediaQuery.removeListener(checkDarkMode);
      }
    };
  }, []);

  const handleThemeChange = () => {
    setIsThemeDark((prev) => !prev);
    const newTheme = isThemeDark ? "light-theme" : "dark-theme";
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(newTheme);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              handleThemeChange={handleThemeChange}
              isThemeDark={isThemeDark}
            />
          }
        >
          <Route path="contact" element={<ThankYouPage />} />
          <Route index element={<Main />} />
          {reactJsProjects.list.map((projectData) => (
            <Route
              key={`react-${projectData.name}`}
              path={projectData.name}
              element={<ProjectDetails projectData={projectData} />}
            />
          ))}
          {androidProjects.list.map((projectData) => (
            <Route
              key={`android-${projectData.name}`}
              path={projectData.name}
              element={<ProjectDetails projectData={projectData} />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;