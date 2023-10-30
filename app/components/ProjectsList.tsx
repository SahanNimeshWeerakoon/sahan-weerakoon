import Accordian from "./miniComponents/Accordian";
import ProjectsListI from "../interfaces/ProjectsListI";
import ProjectI from "../interfaces/ProjectI";

const ProjectsList = ({ projectsList, onProjectClick }: { projectsList: ProjectsListI, onProjectClick: (newType: ProjectI) => void }) => {
    return (
        <div className="projectsList">
            {projectsList.items.map(prj => {
                return (
                    <div className="projectsList_project" key={prj.id}>
                        <Accordian project={prj} onProjectClick={onProjectClick} />
                    </div>
                )
            })}
        </div>
    );
}

export default ProjectsList