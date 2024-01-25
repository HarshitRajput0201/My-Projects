import Project from "./Project";

function Projects({projects,removeProject}){
    return(
        <div className="grid grid-cols-3 gap-10 px-80 py-10">
        {
            projects.map( (project) => {
                        return <Project key={project.id} {...project} removeProject={removeProject}></Project>
                    })
        }
        </div>
    );
}

export default Projects;