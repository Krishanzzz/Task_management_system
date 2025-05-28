import "./CSSFiles/Navbar.css";
import {Link} from "react-router-dom";
import {useProject} from "./ProjectContextProvider.jsx";

export function Navbar() {
    const {project} = useProject();
    return (
        <span className={"navbar-container"}>
            <h1 className={"project-name"}>{project}</h1>
            <div className={"navbar-items"}>
                <Link to={"/summary"} className={"btn"} style={{textDecoration : "none",color : "black"}}><img src={"src/assets/summary.svg"} alt={"summary"}/><button>Summary</button></Link>
                <Link to={"/project"} className={"btn"} style={{textDecoration : "none",color : "black"}}><img src={"src/assets/board.svg"} alt={"board"}/><button>Board</button></Link>
                <Link to={"/list"} className={"btn"} style={{textDecoration : "none",color : "black"}}><img src={"src/assets/list.svg"} alt={"list"}/><button>List</button></Link>
                <Link to={"/goal"} className={"btn"} style={{textDecoration : "none",color : "black"}}><img src={"src/assets/goal.svg"} alt={"goal"}/><button>Goal</button></Link>
                <Link to={"/code"} className={"btn"} style={{textDecoration : "none",color : "black"}}><img src={"src/assets/code.svg"} alt={"code"}/><button>Code</button></Link>
                <Link to={"/issue"} className={"btn"} style={{textDecoration : "none",color : "black"}}><img src={"src/assets/plus.svg"} alt={"issue"}/><button>Issue</button></Link>
            </div>
        </span>
    )
}