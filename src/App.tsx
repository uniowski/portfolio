import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Main from "./components/main/Main";
import ProjectDetails from "./components/project-details/ProjectDetails";
import { ProjectItem } from "./types";

function App() {
  const { t } = useTranslation();
  const reactJsProjects = t('reactJsProjects', { returnObjects: true }) as ProjectItem[];
  const androidProjects = t('androidProjects', { returnObjects: true }) as ProjectItem[];

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
          <Route index element={<Main />} />
          {reactJsProjects.map((appData) => (
            <Route
              key={`react-${appData.name}`}
              path={appData.name}
              element={<ProjectDetails appData={appData} />}
            />
          ))}
          {androidProjects.map((appData) => (
            <Route
              key={`android-${appData.name}`}
              path={appData.name}
              element={<ProjectDetails appData={appData} />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;