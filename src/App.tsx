import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import dbEn from "./databaseEn.json";
import dbPl from "./databasePl.json";
import Layout from "./components/layout/Layout";
import Main from "./components/main/Main";
import ProjectDetails from "./components/project-details/ProjectDetails";
import type { PortfolioDb } from "./types";

function App() {
  const [isThemeDark, setIsThemeDark] = useState<boolean>(true);
  const [db, setDb] = useState<PortfolioDb>(dbPl as PortfolioDb);

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

  const handleLanguageChange = (isLanguagePl: boolean) => {
    setDb((isLanguagePl ? dbPl : dbEn) as PortfolioDb);
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
              handleLanguageChange={handleLanguageChange}
              textSections={db.textSections}
            />
          }
        >
          <Route index element={<Main db={db} />} />
          {db.reactJsProjects.map((appData) => (
            <Route
              key={`react-${appData.id}`}
              path={appData.name}
              element={<ProjectDetails appData={appData} appBtnTxt={db.appBtnTxt} />}
            />
          ))}
          {db.androidProjects.map((appData) => (
            <Route
              key={`android-${appData.id}`}
              path={appData.name}
              element={<ProjectDetails appData={appData} appBtnTxt={db.appBtnTxt} />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;