export interface ProjectItem {
  name: string;
  imageLink: string;
  description: string[];
}

export interface ProjectSection {
  title: string;
  list: ProjectItem[];
}

export interface LocalizedSkill {
  title: string;
  description: string[];
}

export interface SkillDefinition {
  id: string;
  icon: string;
  technologies: string[];
  translationKey: string
}

export interface ProjectDetailsButtonLabels {
  tryApp: string;
  openRepository: string;
}

export interface NavigationSectionLabels {
  aboutMe: string;
  reactProjects: string;
  androidProjects: string;
  contact: string;
}

export interface AboutMeContent {
  qualificationInf02: string;
  qualificationInf03: string;
  qualificationInf04: string;
  myNameIs: string;
  iAm: string;
  jobTitle: string;
  and: string;
  secondaryRole: string;
  learningIntro: string;
  mySkills: string;
}

export interface ContactContent {
  copyEmailLabel: string;
  copiedMessage: string;
  formTitle: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
}

export interface PortfolioDb {
  projects: {
    react: ProjectSection;
    android: ProjectSection;
  };
  skills: Record<string, LocalizedSkill>;
  projectDetails: {
    buttons: ProjectDetailsButtonLabels;
  };
  navigation: {
    sections: NavigationSectionLabels;
  };
  aboutMe: {
    content: AboutMeContent;
  };
  contact: {
    content: ContactContent;
  };
}