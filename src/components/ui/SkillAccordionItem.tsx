import * as LucideIcons from "lucide-react";
import React, { useRef } from "react";
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
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleHeaderClick = () => {
    // delay to allow collapse/expand animation to begin
    window.setTimeout(() => {
      if (cardRef.current) {
        // prefer centering the opened card in the visible area with a custom ease-out animation
        const container = cardRef.current.closest(".page-container") as HTMLElement | null;
        if (!container) {
          cardRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
          return;
        }

        const cardRect = cardRef.current.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const currentScroll = container.scrollTop;
        const target =
          currentScroll + (cardRect.top - containerRect.top) - (container.clientHeight / 2 - cardRef.current.clientHeight / 2);

        const duration = 660;
        const start = performance.now();
        const from = currentScroll;

        const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);

        const step = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeOutQuad(progress);
          container.scrollTop = from + (target - from) * eased;
          if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
      }
    }, 360);
  };

  return (
    <Card className="m-3" key={skillDefinition.id} ref={cardRef}>
      <Accordion.Item eventKey={skillDefinition.id}>
        <Accordion.Header onClick={handleHeaderClick}>
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
