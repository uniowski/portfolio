import { ProjectSection } from "../../types";
import Tile from "../tile/Tile";
import "./MyProjects.css";

interface MyProjectProps {
  data: ProjectSection;
  pointer: string;
}

function MyProject({ data, pointer }: MyProjectProps) {
  return (
    <div className="projects-section anim-apear" id={pointer}>
      <h2 className="primary-font-color">{data.title}</h2>
      <div className="grid-projects">
        {data.list.map((item) => (
          <Tile key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MyProject;