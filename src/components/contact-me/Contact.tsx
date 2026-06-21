import { useState } from "react";
import { AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaCheck, FaGithubSquare } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import type { TextSecContact } from "../../types";
import "./Contact.css";

interface ContactProps {
  sectionTitle: string;
  textSecContact: TextSecContact;
}

function Contact({ sectionTitle, textSecContact }: ContactProps) {
  const [contactActionIcon, setContactActionIcon] = useState<JSX.Element>(
    <BiLogoGmail size={30} className="primary-font-color" />
  );
  const [contactEmailAddress, setContactEmailAddress] = useState<string>(
    "dawid.uniowski@gmail.com"
  );

  return (
    <div className="contact anim-apear" id="contact">
      <div className="row">
        <div className="col-md-6 mb-4">
          <h2 className="primary-font-color">{sectionTitle}</h2>
          <div className="row">
            <div className="col-6 mb-4">
              <a href="https://www.facebook.com/dawid.uniowski/" target="_blank" rel="noreferrer">
                <div className="card">
                  <div className="card-body text-center custom-contact-card">
                    <BsFacebook size={30} className="primary-font-color" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-6 mb-4">
              <a href="https://www.instagram.com/dejvit_ok/" target="_blank" rel="noreferrer">
                <div className="card">
                  <div className="card-body text-center custom-contact-card">
                    <AiFillInstagram size={30} className="primary-font-color" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-6 mb-4">
              <a
                href="https://www.linkedin.com/in/dawid-uniowski-673b43287/"
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
              <a href="https://github.com/dejvitxc9?tab=repositories" target="_blank" rel="noreferrer">
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
                  navigator.clipboard.writeText("dawid.uniowski@gmail.com");
                }}
                onMouseEnter={() => {
                  setContactActionIcon(<MdContentCopy size={30} className="primary-font-color" />);
                  setContactEmailAddress(textSecContact.mailCpMsg1);
                }}
                onMouseLeave={() => {
                  setContactActionIcon(<BiLogoGmail size={30} className="primary-font-color" />);
                  setContactEmailAddress("dawid.uniowski@gmail.com");
                }}
                onMouseDownCapture={() => {
                  setContactActionIcon(<FaCheck size={30} className="primary-font-color" />);
                  setContactEmailAddress(textSecContact.mailCpMsg2);
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
                    <p className="m-0 primary-font-color">+48 793 070 996</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <h2 className="primary-font-color">{textSecContact.form}</h2>
          <form name="contact" action="/contact" method="post">
            <div className="mb-3">
              <input type="hidden" name="form-name" value="contact" />
              <label htmlFor="name" className="form-label primary-font-color">
                {textSecContact.formTxt1}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={textSecContact.formTxt1}
                className="form-control"
                required
              />
              <label htmlFor="email" className="form-label primary-font-color">
                {textSecContact.formTxt2}
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
                {textSecContact.formTxt3}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={textSecContact.formTxt4}
                className="form-control"
                required
              />
              <button type="submit" className="btn btn-info primary-font-color">
                {textSecContact.formTxt5}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;