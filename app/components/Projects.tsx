"use client"
import { useState } from "react";
import Title from "./miniComponents/Title";
import ProjectThumb from "./miniComponents/ProjectThumb";
import ProjectsList from "./ProjectsList";
import ProjectI from "../interfaces/ProjectI";
import ProjectsListI from "../interfaces/ProjectsListI";

const Projects = () => {
    const [ selectedProject, setSelectedProject ] = useState<ProjectI>({id: "0", name: "Select Project", description: "", thumbnail: "no_thumb.png", detailsLink: "", visitLink: "", isOpen: false});
    const [ projectsList, setProjectsList ] = useState({
        items: [
            { id: "1", name: "Promptopia", description: "", thumbnail: "promptopia.png", detailsLink: "", visitLink: "https://google.com", isOpen: false },
            { id: "2", name: "Project 2", description: "", thumbnail: "", detailsLink: "", visitLink: "", isOpen: false },
            { id: "3", name: "Prject 3", description: "", thumbnail: "", detailsLink: "", visitLink: "", isOpen: false },
            { id: "4", name: "Proect 4", description: "", thumbnail: "", detailsLink: "", visitLink: "", isOpen: false },
        ]
    });

    const handleProjectClick = async (e: ProjectI) => {
        setSelectedProject(e);
        setProjectsList((projects) => {
            let items = projects.items.map( itm => {
                return itm.id === e.id ? { ...itm, isOpen: true } : { ...itm, isOpen: false }
            });
            return {
                items
            }
        });
    }

    return (
        <div className="projects">
            <Title title="PROJECTS" />
            <div className="projects_carousel">
                <div className="projects_thumb">
                    <ProjectThumb selectedProject={selectedProject} />
                </div>
                <div className="projects_list">
                    <ProjectsList projectsList={projectsList} onProjectClick={e => handleProjectClick(e)} />
                </div>
            </div>
        </div>
    );
}

export default Projects