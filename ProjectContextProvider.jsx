import {createContext, useContext} from "react";
import {useState} from "react";

export const ProjectContext = createContext()
export function ProjectContextProvider({children}) {
    const [project, setProject] = useState("Default Project");
    return (
        <ProjectContext.Provider value={{project, setProject}}>
            {children}
        </ProjectContext.Provider>
    )
}
export function useProject() {
    return useContext(ProjectContext);
}