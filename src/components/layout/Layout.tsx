import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from "react-icons/fa";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import Switch from "react-switch";
import Flag from "react-world-flags";
import "./Layout.css";

interface LayoutProps {
  handleThemeChange: () => void;
  isThemeDark: boolean;
}

function Layout({
  handleThemeChange,
  isThemeDark,
}: LayoutProps) {
  const { t, i18n } = useTranslation();

  const handleChange = () => {
    handleThemeChange();
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((prev) => !prev);
  };

  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
    setClick(false);
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  const offsetValue = -100;

  const logoTheme = () => {
    if (isThemeDark) {
      return (
        <img
          className="image-fluid logo"
          src="/icons/new-dawid-uniowski-logo-dark.png"
          alt="logo Dawid Uniowski - dark"
        />
      );
    }

    return (
      <img
        className="image-fluid logo"
        src="/icons/new-dawid-uniowski-logo-light.png"
        alt="logo Dawid Uniowski - light"
      />
    );
  };

  return (
    <div className={isThemeDark ? "App-dark" : "App-light"}>
      <nav className="navigationbar">
        <Link
          to="o-mnie"
          onClick={closeMenu}
          offset={offsetValue}
          className="logoContainer primary-font-color"
        >
          {logoTheme()}
        </Link>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} className="primary-font-color" />
          ) : (
            <FaBars size={30} className="primary-font-color" />
          )}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="o-mnie"
              spy={true}
              smooth={false}
              offset={offsetValue}
              duration={500}
              onClick={closeMenu}
              className="primary-font-color"
            >
              {t('textSections.aboutMeText')}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects-react-js"
              spy={true}
              smooth={false}
              offset={offsetValue}
              duration={500}
              onClick={closeMenu}
              className="primary-font-color"
            >
              {t('textSections.reactProjectsText')}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects-android"
              spy={true}
              smooth={false}
              offset={offsetValue}
              duration={300}
              onClick={closeMenu}
              className="primary-font-color"
            >
              {t('textSections.androidProjectsText')}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              spy={true}
              smooth={false}
              offset={offsetValue}
              duration={300}
              onClick={closeMenu}
              className="primary-font-color"
            >
              {t('textSections.contactText')}
            </Link>
          </li>
          <li>
            <Switch
              className="theme-switch"
              onChange={handleChange}
              checked={isThemeDark}
              checkedIcon={<img src="/icons/dark-theme.png" alt="dark mode" height={28} width={28} />}
              uncheckedIcon={<img src="/icons/light-theme.png" alt="light mode" height={28} width={28} />}
              onColor="#222222"
              offColor="#c4c4c4"
            />
          </li>
          <li className="nav-item">
            <Flag
              code="PL"
              alt="jezyk polski"
              height={32}
              width={64}
              onClick={() => changeLanguage('pl')}
            />
            <Flag
              code="GB"
              alt="english language"
              height={32}
              width={64}
              onClick={() => changeLanguage('en')}
            />
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;