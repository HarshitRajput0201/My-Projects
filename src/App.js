import "./App.css";
import Projects from "./Components/Projects";
import data from "./data";
import React, {useState} from "react";

function App() {

  const[projects, setProjects] = useState(data);

  function removeProject(id) {
    const newProject = projects.filter(project => project.id !== id);
    setProjects(newProject);
  }

  if(projects.length === 0) {
    return (
        <div className="refresh text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 h-screen">
          <h2 className="text-2xl text-center">All Projects are Completed</h2>
          <button className="px-3 py-1 border-solid m-5 rounded-full bg-slate-400 text-white font-bold" onClick={() => setProjects(data)}>
            Refresh
          </button>
        </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-100vw text-center p-5 min-h-screen">
      <h1 className="text-5xl p-5 border-4 border-black inline-block border-dashed rounded-md mx-auto my-auto">My Projects</h1>
      <Projects projects={projects} removeProject={removeProject}></Projects>
    </div>
  );
}

export default App;
