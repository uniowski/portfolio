import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Contact.css";

function ThankYouPage() {
  const { t } = useTranslation();

  return (
    <div className="thank-you-page anim-apear">
      <div className="thank-you-card">
        <h1 className="primary-font-color">{t("contact.thankYou.title")}</h1>
        <p className="primary-font-color thank-you-message">
          {t("contact.thankYou.message")}
        </p>
        <Link to="/" className="btn btn-info primary-font-color thank-you-button">
          {t("contact.thankYou.back")}
        </Link>
      </div>
    </div>
  );
}

export default ThankYouPage;
