import {Header} from "../../Header.jsx";
import {Navbar} from "../../Navbar.jsx";
import {GoalBody} from "./GoalBody.jsx";

export function Goal() {
    return (
        <div>
            <Header/>
            <div style={{display:"flex"}}>
                <Navbar/>
                <GoalBody/>
            </div>
        </div>
    )
}
