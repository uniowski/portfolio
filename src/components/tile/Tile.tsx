import { Link } from "react-router-dom";
import type { ProjectItem } from "../../types";
import "./Tile.css";

interface TileProps {
  item: ProjectItem;
}

function Tile({ item }: TileProps) {
  return (
    <Link to={item.name} className="tile">
      <img className="project-picture" src={`pictures/${item.imageLink}`} alt={item.name} />
      <h3 className="project-title primary-font-color">{item.name}</h3>
    </Link>
  );
}

export default Tile;