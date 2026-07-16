import * as LucideIcons from "lucide-react";
import React from "react";
import { Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import type { LocalizedSkill, SkillDefinition } from "../../types";
import TechBadge from "./TechBadge";

interface SkillAccordionItemProps {
  skillDefinition: SkillDefinition;
  skill: LocalizedSkill;
}

export default function SkillAccordionItem({ skillDefinition, skill }: SkillAccordionItemProps) {
  const IconComponent = (LucideIcons[skillDefinition.icon as keyof typeof LucideIcons] || LucideIcons.Code) as React.ComponentType<{ className?: string }>;

  return (
    <Card className="m-3" key={skillDefinition.id}>
      <Accordion.Item eventKey={skillDefinition.id}>
        <Accordion.Header>
          <div className="language-icon-wrapper d-flex align-items-center justify-content-center">
            <IconComponent className="primary-font-color" />
          </div>
          <p className="m-3 primary-font-color">{skill.title}</p>
        </Accordion.Header>
        <Accordion.Body>
          <div className="d-flex flex-wrap gap-2 mb-3">
            {skillDefinition.technologies.map((tech) => (
              <TechBadge key={tech}>
                {tech}
              </TechBadge>
            ))}
          </div>
          <div className="skill-description-points">
            {skill.description.map((point) => (
              <p key={point} className="m-1 primary-font-color">
                • {point}
              </p>
            ))}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Card>
  );
}
