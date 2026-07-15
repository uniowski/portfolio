import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaCheck, FaGithubSquare } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { SOCIAL_LINKS } from "../../constants/links";
import "./Contact.css";

function Contact() {
  const { t } = useTranslation();

  const [contactActionIcon, setContactActionIcon] = useState<JSX.Element>(
    <BiLogoGmail size={30} className="primary-font-color" />
  );
  const [contactEmailAddress, setContactEmailAddress] = useState<string>(
    SOCIAL_LINKS.email
  );

  return (
    <div className="contact anim-apear" id="contact">
      <div className="row">
        <div className="col-md-6 mb-4">
          <h2 className="primary-font-color">{t("textSections.contactText")}</h2>
          <div className="row">
            <div className="col-6 mb-4">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer">
                <div className="card">
                  <div className="card-body text-center custom-contact-card">
                    <BsFacebook size={30} className="primary-font-color" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-6 mb-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer">
                <div className="card">
                  <div className="card-body text-center custom-contact-card">
                    <AiFillInstagram size={30} className="primary-font-color" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-6 mb-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <div className="card">
                  <div className="card-body text-center custom-contact-card">
                    <BsLinkedin size={30} className="primary-font-color" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-6 mb-4">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">
                <div className="card">
                  <div className="card-body text-center custom-contact-card">
                    <FaGithubSquare size={30} className="primary-font-color" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div
                className="card"
                onClick={() => {
                  navigator.clipboard.writeText(SOCIAL_LINKS.email);
                }}
                onMouseEnter={() => {
                  setContactActionIcon(<MdContentCopy size={30} className="primary-font-color" />);
                  setContactEmailAddress(t("textSecContact.mailCpMsg1"));
                }}
                onMouseLeave={() => {
                  setContactActionIcon(<BiLogoGmail size={30} className="primary-font-color" />);
                  setContactEmailAddress(SOCIAL_LINKS.email);
                }}
                onMouseDownCapture={() => {
                  setContactActionIcon(<FaCheck size={30} className="primary-font-color" />);
                  setContactEmailAddress(t("textSecContact.mailCpMsg2"));
                }}
              >
                <div className="card-body text-center custom-contact-card">
                  {contactActionIcon}
                  <p className="m-0 primary-font-color link">{contactEmailAddress}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <a href="tel:+48793070996">
                <div className="card">
                  <div className="card-body text-center custom-contact-card">
                    <AiFillPhone size={30} className="primary-font-color" />
                    <p className="m-0 primary-font-color">{SOCIAL_LINKS.phone}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <h2 className="primary-font-color">{t("textSecContact.form")}</h2>
          <form name="contact" action="/contact" method="post">
            <div className="mb-3">
              <input type="hidden" name="form-name" value="contact" />
              <label htmlFor="name" className="form-label primary-font-color">
                {t("textSecContact.formTxt1")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t("textSecContact.formTxt1")}
                className="form-control"
                required
              />
              <label htmlFor="email" className="form-label primary-font-color">
                {t("textSecContact.formTxt2")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@exp.com"
                className="form-control"
                required
              />
              <label htmlFor="message" className="form-label primary-font-color">
                {t("textSecContact.formTxt3")}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={t("textSecContact.formTxt4")}
                className="form-control"
                required
              />
              <button type="submit" className="btn btn-info primary-font-color">
                {t("textSecContact.formTxt5")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;