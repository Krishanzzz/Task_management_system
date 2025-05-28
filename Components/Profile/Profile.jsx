import {Header} from "../../Header.jsx";
import "../../CSSFiles/Profile.css";
export function Profile() {
    const profileInfo = {
        name : "Heisenberg",
        email : "heisenberg@gmail.com",
        contact : "9876543210",
        teamNo: "team 12",
        location : "chennai"
    }
    return (
        <div>
            <Header/>
            <div className={"profile-body"}>
                <div className={"profile-header"}></div>
                <div className={"profile-info"}>
                    <table className={"profile-table"}>
                        <tr>
                            <td>Name</td>
                            <td>{profileInfo.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{profileInfo.email}</td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>{profileInfo.contact}</td>
                        </tr>

                        <tr>
                            <td>Team No</td>
                            <td>{profileInfo.teamNo}</td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <td>{profileInfo.location}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
