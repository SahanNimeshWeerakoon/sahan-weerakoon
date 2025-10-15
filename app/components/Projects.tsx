import { FC } from 'react'
import Image from 'next/image';

const Projects: FC = () => {
    let projects = [
        {
            id: 1,
            image: "/img/projects/medicare.webp",
            title: "Medicare",
            description: "I developed a user management application for a medical center, combining Vue.js and Node.js for the main system and .NET to integrate fingerprint authentication with a Digital Persona scanner. The app allows secure identification through fingerprint saving and comparison, while administrators manage user details and roles, including doctors, nurses, lab technicians, and admins. I also used Tesseract to extract passport data and auto-fill forms, improving efficiency in onboarding. I handled the backend independently, contributed to frontend modules, and deployed the system on an Ubuntu server across two medical branches in Colombo and Kandy. This project strengthened my experience in biometric authentication, role-based access, and full-stack deployment.",
            skills: ["React", "Nodejs", ".NET", "Tesseractjs", "Digital Persona", "Fingerprint Scanner", "Aws EC2", "AWS S3", "CI/CD pipelines"]
        },
        {
            id: 2,
            image: "/img/projects/explore-sl.webp",
            title: "Explore Sri Lanka Norway",
            description: "I built an e-commerce site called Explore Sri Lanka for a Norwegian client using Shopify. I managed client communication directly, collaborated with a designer to shape the look and feel, and integrated Stripe as the payment gateway. Along with setting up the store, I also created product packaging to match the brand’s identity. The project was delivered smoothly and earned complete client satisfaction.",
            skills: ["Shopify", "Liquid templating", "Stripe", "Figma"]
        },
        {
            id: 3,
            image: "/img/projects/blood-sperms.webp",
            title: "Blockbusto",
            description: "I created a pay-per-view website for Sri Lankan director Mr. Kawshalya Karunaratne, known for his films exploring dark psychology. The platform was built with Stripe as the payment gateway and integrated Video.js for streaming, offering multiple quality options (360p, 480p, 720p, and 1080p). To secure content, I implemented a token-based access system in PHP that validated purchases, limited viewing sessions to six hours, and protected files from direct access. This ensured that only verified users could stream the movies while still allowing smooth playback features like seeking. The project combined e-commerce, digital rights protection, and high-quality video delivery into a seamless experience for both the client and the viewers.",
            skills: ["PHP", "Stripe", "Payperview", "Video JS"]
        },
        {
            id: 4,
            image: "/img/projects/salon-blush.webp",
            title: "Salon Blush Battaramulla",
            description: "I created a salon management system designed to streamline daily operations and reduce inefficiencies. The platform included modules for managing products, customer preferences, services, and appointment scheduling. Each service was linked with the products it required, which allowed automatic calculation of product usage costs and more accurate pricing. The system also tracked product consumption over time, predicted their lifespan, and generated reminders for when new stock needed to be purchased. By combining customer preference tracking with service and inventory management, the solution not only improved the client experience but also optimized inventory costs and eliminated guesswork in restocking. The result was a smoother, data-driven workflow that significantly eased overall salon operations.",
            skills: ["React Native", "Nodejs"]
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
                                <Image src={project.image} alt="" width={100} height={100} />
                            </div>
                            <div className='details'>
                                <h2>{project.title}</h2>
                                <p className='description'>{project.description}</p>
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