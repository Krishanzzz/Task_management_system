import "./CSSFiles/AllHeader.css";
import {Link} from "react-router-dom";
import {useState} from "react";
export function Header() {
    const [profileToggle, setProfileToggle] = useState(false);
    const [notificationToggle, setNotificationToggle] = useState(false);
    const notifications = {
        op1 : "backend overdue",
        op2 : "time extended"
    }

    return (
        <div className="header-container">
            <h1 className="header-title">Taskie</h1>
            <div className="nav-container">
                <Link to={"/TLdashboard"}><button>Your Work</button></Link>
                <Link to={"/project"}><button>Project</button></Link>
                <Link to={"/TLdashboard"}><button>Dashboard</button></Link>
                <Link to={"/team"} ><button>Team</button></Link>
            </div>
            <div className="info-container">
                <input type={"text"} placeholder={"Search"} name={"search"}/>
                <div className={"notification"}>
                        <img
                            src={"src/assets/notifications.svg"}
                            alt="notifications"
                            className={"notification-icon"}
                            onClick={() => setNotificationToggle(!notificationToggle)}
                        />
                    {notificationToggle && (
                        <div className={"notification-box"}>
                            <ul>
                                <li>{notifications.op1}</li>
                                <li>{notifications.op2}</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className={"profile"}>
                    <img
                        className={"profile-img"}
                        src={"src/assets/User.svg"}
                        alt="profile"
                        onClick={() => setProfileToggle(!profileToggle)}
                    />
                    {profileToggle && (
                        <div className={"profile-dropdown"}>
                            <ul>
                                <Link to={"/profile"} style={{textDecoration : "none",color: "black"}}><li>Profile</li></Link>
                                <Link to={"/"} style={{textDecoration : "none",color: "black"}}><li>Log out</li></Link>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}