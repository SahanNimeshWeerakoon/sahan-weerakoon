"use client"
import Button from './Button'
import ProjectI from '@/app/interfaces/ProjectI';

const Accordian = ({ project, onProjectClick }: { project: ProjectI, onProjectClick: (newType: ProjectI) => void }) => {
    return (
        <div className={`accordian transition ${ project.isOpen ? 'accordian--open' : '' }`} onClick={() => {onProjectClick(project)}}>
            <div className="accordian_header cursor-pointer">
                <h3>{project.name}</h3>
                <img src="/img/accordian-closed.png" className='accordian_icon transition' alt="closed accordian" title="closed accordian" />
            </div>
            <div className="accordian_body transition">
                <p>{project.description}</p>
            </div>
            <div className="accordian_footer transition">
                <Button btnTxt='DETAILS' btnClasses='btn--outline' url={project.detailsLink} />
                <Button btnTxt='VISIT' btnClasses='ml-1' url={project.visitLink} />
            </div>
        </div>
    );
}

export default Accordian