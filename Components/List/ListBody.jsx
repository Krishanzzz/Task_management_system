import "../../CSSFiles/ListBody.css";
import { useState } from "react";

export function ListBody() {
    const [search, setSearch] = useState("");
    const [domains, setDomains] = useState([
        { name: "backend", assignee: "deadpool", dueDate: "3-3-2025" },
        { name: "frontend", assignee: "iron man", dueDate: "4-4-2025" },
        { name: "database", assignee: "thor", dueDate: "5-5-2025" }
    ])

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const markAsCompleted = (index) => {
        const updatedDomains = domains.filter((_, i) => i !== index);
        setDomains(updatedDomains);
    }

    const filteredItems = domains.filter((domain) =>
        domain.name.toLowerCase().includes(search.toLowerCase()) ||
        domain.assignee.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className={"list-body"}>
            <h1>List</h1>
            <input type={"text"} placeholder={"Search"} name={"search"} onChange={handleSearch} />
            <table className={"list-table"} border={"2px solid black"}>
                <thead>
                <tr>
                    <th>Module</th>
                    <th>Assignee</th>
                    <th>Due Date</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <tr key={index} className={"table-row"}>
                            <td>{item.name}</td>
                            <td>{item.assignee}</td>
                            <td>{item.dueDate}</td>
                            <td className={"actions"}>
                                <button onClick={() => markAsCompleted(index)}>Completed</button>
                                <button>Overdue</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">No Modules Found</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}
