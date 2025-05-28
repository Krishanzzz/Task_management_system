import {Header} from "../../Header.jsx";
import {Navbar} from "../../Navbar.jsx";
import {CodeBody} from "./CodeBody.jsx";

export function Code() {
    return(
        <>
            <Header/>
            <div style={{display:"flex"}}>
                <Navbar/>
                <CodeBody/>
            </div>
        </>
    )
}
