import "../../CSSFiles/IssueBody.css";
import { useState } from "react";

export function IssueBody() {
    const [issues, setIssues] = useState([]);
    const [userRole, setUserRole] = useState("team lead");

    const addIssue = () => {
        const detail = prompt("Enter issue details (Format: Name, Assignee, Due Date, Resources):");
        if (!detail) return;

        const parts = detail.split(",").map(item => item.trim());
        if (parts.length < 4) {
            alert("Invalid input format! Please enter details in the correct format.");
            return;
        }

        const [name, assignee, dueDate, resources] = parts;

        if (!name || !assignee || !dueDate || !resources) {
            alert("All fields are required!");
            return;
        }

        const newIssue = { name, assignee, dueDate, resources };

        setIssues(prevIssues => [...prevIssues, newIssue]);
    };

    return (
        <div className="issue-body">
            <div className="container">
                <h3>Issue</h3>
                {userRole === "team lead" && (
                    <button className="issue-btn" onClick={addIssue}>Create Issue</button>
                )}
            </div>

            {issues.length > 0 ? (
                <table className="issue-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Assignee</th>
                        <th>Due Date</th>
                        <th>Resources</th>
                    </tr>
                    </thead>
                    <tbody>
                    {issues.map((issue, index) => (
                        <tr key={index}>
                            <td>{issue.name}</td>
                            <td>{issue.assignee}</td>
                            <td>{issue.dueDate}</td>
                            <td>
                                <a href={issue.resources} target="_blank" >
                                    {issue.resources}
                                </a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>No issues available</p>
            )}
        </div>
    );
}
