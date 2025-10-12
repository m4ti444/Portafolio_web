import '../../styles/projects.css'
import projects from '../../data/projects.js'

function Projects() {
    return(
        <div id="projects-section" className="project-section " >
            <div className="row">
                {projects.map((project) => (
                    <div className="col-sm-4" key={project.id}>
                        <div className="card" >
                            <img className="card-img-top" src={project.image}  alt={'Imagen de ${project.name}'}/>
                            <div className="card-body">
                                <h5 className="projects-card-title">{project.name}</h5>
                                <p className="card-description">{project.description}</p>
                                <p className='card-text'>Tecnologías: {project.software.join(', ')}</p>
                                <a className="btn btn-primary"
                                href={project.link} 
                                target="_blank"
                                rel="noopener noreferrer">Ver en Github</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}
export default Projects;