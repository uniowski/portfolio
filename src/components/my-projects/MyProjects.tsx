import type { ProjectItem } from "../../types";
import Tile from "../tile/Tile";
import "./MyProjects.css";

interface MyProjectProps {
  sectionTitle: string;
  itemList: ProjectItem[];
  pointer: string;
}

function MyProject({ sectionTitle, itemList, pointer }: MyProjectProps) {
  return (
    <div className="projects-section anim-apear" id={pointer}>
      <h2 className="primary-font-color">{sectionTitle}</h2>
      <div className="grid-projects">
        {itemList.map((item) => (
          <Tile key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MyProject;