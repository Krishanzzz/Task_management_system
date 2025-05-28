import {Header} from "../../Header.jsx";
import {ProjectBody} from "./ProjectBody.jsx";
import {Navbar} from "../../Navbar.jsx";
import "../../Navbar-body.css";
export function Project(){
    return (
        <>
            <Header/>
            <div className={"mainbody"}>
                <Navbar/>
                <ProjectBody/>
            </div>
        </>
    )
}
