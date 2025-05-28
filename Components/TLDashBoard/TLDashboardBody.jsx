import "../../CSSFiles/DashboardBody.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useProject } from "../../ProjectContextProvider.jsx";

export function TLDashboardBody() {
    const { setProject } = useProject();
    const [search, setSearch] = useState("");
    const [dashboards, setDashboard] = useState([
        { name: "Internet Banking", teamNo: "Team 12", teamMembers: 5, status: "Completed" }
    ]);

    const addDashboard = () => {
        const detail = prompt("Enter Project Details (Format: Name, Team No, Members, Status):")
        if (!detail) return;
        const [name, teamNo, teamMembers, status] = detail.split(",");
        if (!name || !teamNo || !teamMembers || !status) {
            alert("Invalid input format! Use: Name, Team No, Members, Status");
            return;
        }
        const dashboard = {
            name: name.trim(),
            teamNo: teamNo.trim(),
            teamMembers: teamMembers.trim(),
            status: status.trim(),
        };
        setDashboard([...dashboards, dashboard]);
    };

    const filteredProject = search.trim() === "" ? dashboards :
        dashboards.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="dashboard-body">
            <p>Dashboards (Team Lead)</p>
            <div className="searchBar">
                <input
                    type="text"
                    placeholder="Select Project"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="dashboard-btn" onClick={addDashboard}>
                    Create Dashboard
                </button>
            </div>
            <table className="dashboard-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Team No</th>
                    <th>Team Members</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {filteredProject.length > 0 ? (
                    filteredProject.map((dashboard, index) => (
                        <tr key={index}>
                            <Link to="/project" onClick={() => setProject(dashboard.name)} style={{ textDecoration: "none", color: "black" }}>
                                <td>{dashboard.name}</td>
                            </Link>
                            <td>{dashboard.teamNo}</td>
                            <td>{dashboard.teamMembers}</td>
                            <td>{dashboard.status}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">No projects found</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}