"use client"
import { useState } from "react";
import Title from "./miniComponents/Title";
import ProjectThumb from "./miniComponents/ProjectThumb";

const Projects = () => {
    const [ selectedProject, setSelectedProject ] = useState({});
    const [ projectsList, setProjectsList ] = useState([
        { name: "Project 1", description: "", thumbnail: "", detailsLink: "", visitLink: "" },
        { name: "Project 2", description: "", thumbnail: "", detailsLink: "", visitLink: "" },
        { name: "Prject 3", description: "", thumbnail: "", detailsLink: "", visitLink: "" },
        { name: "Proect 4", description: "", thumbnail: "", detailsLink: "", visitLink: "" },
    ]);

    return (
        <div className="projects">
            <Title title="PROJECTS" />
            <div className="projects_carousel">
                <div className="projects_thumb">
                    <ProjectThumb selectedProject={selectedProject} />
                </div>
                <div className="projects_list"></div>
            </div>
        </div>
    );
}

export default Projects