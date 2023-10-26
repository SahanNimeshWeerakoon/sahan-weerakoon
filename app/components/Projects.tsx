import Title from "./miniComponents/Title";

const Projects = () => {
    return (
        <div className="projects">
            <Title title="PROJECTS" />
            <div className="projects_carousel">
                <div className="projects_thumb"></div>
                <div className="projects_list"></div>
            </div>
        </div>
    );
}

export default Projects