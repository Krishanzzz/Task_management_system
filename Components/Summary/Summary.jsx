import {Header} from "../../Header.jsx";
import {Navbar} from "../../Navbar.jsx";
import {SummaryBody} from "./SummaryBody.jsx";
import "../../Navbar-body.css";
export function Summary() {
    return (
        <div>
            <Header/>
            <div className={"mainbody"}>
                <Navbar/>
                <SummaryBody/>
            </div>
        </div>
    )
}
