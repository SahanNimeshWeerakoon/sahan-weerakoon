import ProjectI from "@/app/interfaces/ProjectI";

const ProjectThumb = ({selectedProject}: {selectedProject: ProjectI}) => {
    return (
        <div className="projectThumb">
            <div className="projectThumb__overlay"></div>
            <img className="projectThumb__img" src={selectedProject.thumbnail} alt={`${selectedProject.name} thumbnail`} title={`${selectedProject.name} thumbnail`} />
        </div>
    );
}

export default ProjectThumb