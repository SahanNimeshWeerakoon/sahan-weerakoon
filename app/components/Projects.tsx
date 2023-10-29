"use client"
import { useState } from "react";
import Title from "./miniComponents/Title";
import ProjectThumb from "./miniComponents/ProjectThumb";

const Projects = () => {
    const [ selectedProject, setSelectedProject ] = useState({id: "0", name: "Project 1", description: "", thumbnail: "", detailsLink: "", visitLink: ""});
    const [ projectsList, setProjectsList ] = useState([
        { id: "1", name: "Project 1", description: "", thumbnail: "", detailsLink: "", visitLink: "" },
        { id: "2", name: "Project 2", description: "", thumbnail: "", detailsLink: "", visitLink: "" },
        { id: "3", name: "Prject 3", description: "", thumbnail: "", detailsLink: "", visitLink: "" },
        { id: "4", name: "Proect 4", description: "", thumbnail: "", detailsLink: "", visitLink: "" },
    ]);

    return (
        <div className="projects">
            <Title title="PROJECTS" />
            <div className="projects_carousel">
                <div className="projects_thumb">
                    <ProjectThumb selectedProject={selectedProject} />
                </div>
                <div className="projects_list">
                    
                </div>
            </div>
        </div>
    );
}

export default Projects