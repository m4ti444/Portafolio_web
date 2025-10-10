import '../../styles/projects.css'

function Projects() {
    return(
        <div classname="project-section">
            <div className="row">
                <div className="col-sm-6">
                    <div className="card" >
                        <img className="card-img-top" src="https://wallpapercave.com/wp/wp13819753.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <img className="card-img-top" src="https://wallpapercave.com/wp/wp13819753.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Projects;