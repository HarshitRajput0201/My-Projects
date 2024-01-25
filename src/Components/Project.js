

function Project({id,image,name,info,removeProject}){
    return(
        <div className="rounded-2xl bg-white">
            <img key={id} src={image} alt={name} className="rounded-t-2xl"/>
            <h3 className="p-3 font-bold text-lg">{name}</h3>
            <p className="text-justify px-3 h-56">{info}</p>
            <button onClick={() => removeProject(id)} className="px-3 py-1 border-solid m-5 rounded-full bg-slate-400 text-white font-bold">Completed</button>
        </div>
    );
}

export default Project;
