import {Header} from "../../Header.jsx";
import {Navbar} from "../../Navbar.jsx";
import {ListBody} from "./ListBody.jsx";

export function List() {
    return (
        <div>
            <Header/>
            <div style={{display: 'flex'}}>
                <Navbar/>
                <ListBody/>
            </div>
        </div>
    )
}
