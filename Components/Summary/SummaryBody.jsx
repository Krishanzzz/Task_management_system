import "../../CSSFiles/SummaryBody.css";
import {useState} from "react";

export function SummaryBody() {
    const [summary, setSummary] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [userRole, setUserRole] = useState("team lead");

    const handleEdit = () => {
        setIsEditing(true);
    }
    const handleSave = () => {
        setIsEditing(false);
    }
    return (
        <div style={{padding:'10px'}}>
            <h3>Summary</h3>
            <textarea
                className={"summary-container"}
                cols={10}
                rows={15}
                onChange={(e) => setSummary(e.target.value)}
                disabled={!isEditing}
                />
            {userRole === "team lead" && (
            <div className={"btn-container"}>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleSave}>Save</button>
            </div>
            )}
        </div>
    )
}