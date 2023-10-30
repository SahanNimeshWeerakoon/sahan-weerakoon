import ProjectI from "@/app/interfaces/ProjectI";

const ProjectThumb = ({selectedProject}: {selectedProject: ProjectI}) => {
    return (
        <div className="projectThumb">
            <div className="projectThumb_overlay"></div>
            <img className="projectThumb_img" src={`/img/projects/${selectedProject.thumbnail}`} alt={`${selectedProject.name} thumbnail`} title={`${selectedProject.name} thumbnail`} />
        </div>
    );
}

export default ProjectThumb