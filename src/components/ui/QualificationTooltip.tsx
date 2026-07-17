import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

interface QualificationTooltipProps {
  label: string;
  tooltipText: string;
}

export default function QualificationTooltip({ label, tooltipText }: QualificationTooltipProps) {
  const tooltip = <Tooltip id={`tooltip-${label}`}>{tooltipText}</Tooltip>;

  return (
    <OverlayTrigger placement="bottom" overlay={tooltip}>
      <span className="qualification primary-font-color">{label}</span>
    </OverlayTrigger>
  );
}
