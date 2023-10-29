import ProjectI from "../interfaces/ProjectI";
import Accordian from "./Accordian";

const ProjectsList = ({ projectsList }: { projectsList: [ProjectI] }) => {
    return (
        <div className="projectsList">
            {projectsList.map(prj => {
                return (
                    <div className="projectsList_project">
                        <Accordian />
                    </div>
                )
            })}
        </div>
    );
}