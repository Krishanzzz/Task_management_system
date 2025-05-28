import {Header} from "../../Header.jsx";
import {useState} from "react";
import "../../CSSFiles/Team.css";
export function Team() {
    const [team, setTeam] = useState("");
    const teamMembers = [
        {
            name : "deadpool",
            email : "deadpool@gmail.com",
            contact : "9876543210",
            location : "coimbatore",
        },
        {
            name : "iron man",
            email : "ironman@gmail.com",
            contact : "9876543210",
            location : "chennai",
        },
        {
            name : "thor",
            email : "thor@gmail.com",
            contact : "9876543210",
            location : "tenkasi",
        },
    ]
    return (
        <div>
            <Header/>
            <h1>Team Members</h1>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Location</th>
                </thead>
                {teamMembers.map((member, index) => (
                    <tr key={index} className={"table-row"}>
                        <td>{member.name}</td>
                        <td>{member.email}</td>
                        <td>{member.contact}</td>
                        <td>{member.location}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
