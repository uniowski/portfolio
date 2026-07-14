export interface ProjectItem {
  id: number;
  name: string;
  imageLink: string;
  description: string[];
  simulationLink: string;
  gitHubLink: string;
}

export interface LanguageSkill {
  name: string;
  icon: string;
  skills: string[];
}

export interface AppBtnText {
  tryApp: string;
  githubRepo1: string;
  githubRepo2: string;
}

export interface TextSections {
  aboutMeText: string;
  reactProjectsText: string;
  androidProjectsText: string;
  contactText: string;
}

export interface TextSecAboutMe {
  inf02text: string;
  inf03text: string;
  inf04text: string;
  myNameis: string;
  helloTxt1: string;
  helloTxt2: string;
  helloTxt3: string;
  helloTxt4: string;
  helloTxt5: string;
  mySkills: string;
}

export interface TextSecContact {
  mailCpMsg1: string;
  mailCpMsg2: string;
  form: string;
  formTxt1: string;
  formTxt2: string;
  formTxt3: string;
  formTxt4: string;
  formTxt5: string;
}

export interface PortfolioDb {
  reactJsProjects: ProjectItem[];
  androidProjects: ProjectItem[];
  languageSkills: LanguageSkill[];
  appBtnTxt: AppBtnText;
  textSections: TextSections;
  textSecAboutMe: TextSecAboutMe;
  textSecContact: TextSecContact;
}