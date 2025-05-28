import {Header} from "../../Header.jsx";
import {Navbar} from "../../Navbar.jsx";
import {IssueBody} from "./IssueBody.jsx";

export function Issue() {
    return(
        <div>
            <Header/>
            <div style={{display:"flex"}}>
                <Navbar/>
                <IssueBody/>
            </div>
        </div>
    )
}
