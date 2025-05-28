import {useState} from "react";
import "../../CSSFiles/GoalBody.css";
export function GoalBody() {
    const [goal, setGoal] = useState("");
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
            <h3>Goal</h3>
            <textarea
                className={"goal-container"}
                cols={10}
                rows={15}
                onChange={(e) => setGoal(e.target.value)}
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