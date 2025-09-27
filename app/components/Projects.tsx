import { FC } from 'react'
import Image from 'next/image';

const Projects: FC = () => {
    let projects = [
        {
            id: 1,
            image: "/img/project-thumbnail.png",
            title: "project one",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat veniam consequuntur enim officia, officiis iure nostrum alias tempore, ex, mollitia error. Deserunt praesentium, esse numquam officiis ea minus nisi.",
            skills: ["React", "Next", "GIT", "Nest"]
        },
        {
            id: 2,
            image: "/img/project-thumbnail.png",
            title: "project Two",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat veniam consequuntur enim officia, officiis iure nostrum alias tempore, ex, mollitia error. Deserunt praesentium, esse numquam officiis ea minus nisi.",
            skills: ["React", "Next", "GIT", "Nest"]
        },
        {
            id: 3,
            image: "/img/project-thumbnail.png",
            title: "project three",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat veniam consequuntur enim officia, officiis iure nostrum alias tempore, ex, mollitia error. Deserunt praesentium, esse numquam officiis ea minus nisi.",
            skills: ["React", "Next", "GIT", "Nest"]
        },
        {
            id: 4,
            image: "/img/project-thumbnail.png",
            title: "project four ",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat veniam consequuntur enim officia, officiis iure nostrum alias tempore, ex, mollitia error. Deserunt praesentium, esse numquam officiis ea minus nisi.",
            skills: ["React", "pika", "GIT", "Nest"]
        },
    ];
    return (
        <div className='projects' id="projects">
            <h1>Projects</h1>
            <div className='projects-list'>
                {
                    projects.map(project => (
                        <div className='project' key={project.id}>
                            <div className='thumbnail'>
                                <Image src="/img/project-thumbnail.png" alt="" width={100} height={100} />
                            </div>
                            <div className='details'>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <div className='skills'>
                                    {project.skills.map(skill => (<span className='skill' key={skill}>{skill}</span>))}
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    );
}

export default Projects;