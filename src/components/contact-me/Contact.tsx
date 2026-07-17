import { useTranslation } from "react-i18next";
import { AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaCheck, FaGithubSquare } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { SOCIAL_LINKS } from "../../constants/links";
import Button from "../ui/Button";
import ContactField from "../ui/ContactField";
import CopyableContactCard from "../ui/CopyableContactCard";
import SocialIconCard from "../ui/SocialIconCard";
import "./Contact.css";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact anim-apear" id="contact">
      <div
        className="row">
        <div className="col-md-6 mb-4">
          <h2 className="primary-font-color">{t("navigation.sections.contact")}</h2>
          <div className="row">
            <div className="col-6 mb-4">
              <SocialIconCard link={SOCIAL_LINKS.facebook}>
                <BsFacebook size={30} className="primary-font-color" />
              </SocialIconCard>
            </div>
            <div className="col-6 mb-4">
              <SocialIconCard link={SOCIAL_LINKS.instagram}>
                <AiFillInstagram size={30} className="primary-font-color" />
              </SocialIconCard>
            </div>
            <div className="col-6 mb-4">
              <SocialIconCard link={SOCIAL_LINKS.linkedin}>
                <BsLinkedin size={30} className="primary-font-color" />
              </SocialIconCard>
            </div>
            <div className="col-6 mb-4">
              <SocialIconCard link={SOCIAL_LINKS.github}>
                <FaGithubSquare size={30} className="primary-font-color" />
              </SocialIconCard>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <CopyableContactCard
                contact={SOCIAL_LINKS.email}
                copyLabel={t("contact.content.copyEmailLabel")}
                copiedMessage={t("contact.content.copiedMessage")}
                initialIcon={<BiLogoGmail size={30} className="primary-font-color" />}
                copyIcon={<MdContentCopy size={30} className="primary-font-color" />}
                successIcon={<FaCheck size={30} className="primary-font-color" />}
              />
            </div>
            <div className="col-12 col-md-6 mb-4">
              <CopyableContactCard
                contact={SOCIAL_LINKS.phone}
                initialIcon={<AiFillPhone size={30} className="primary-font-color" />}
                isCopyable={false}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <h2 className="primary-font-color">{t("contact.content.formTitle")}</h2>
          <form name="contact" action="/contact/thanks/" method="post" data-netlify="true">
            <div className="mb-3">
              <input type="hidden" name="form-name" value="contact" />
              <ContactField id="name" name="name" label={t("contact.content.nameLabel")} placeholder={t("contact.content.nameLabel")} required />
              <ContactField id="email" name="email" label={t("contact.content.emailLabel")} type="email" placeholder="example@exp.com" required />
              <ContactField id="message" name="message" label={t("contact.content.messageLabel")} as="textarea" placeholder={t("contact.content.messagePlaceholder")} required />
              <Button type="submit">
                {t("contact.content.submitLabel")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;