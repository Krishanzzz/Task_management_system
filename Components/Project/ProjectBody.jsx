import "../../CSSFiles/ProjectBody.css";
import {useState} from "react";

export function ProjectBody() {
    const currUser = "Deadpool"
    const userRole = "team member"
    const [search,setSearch] = useState("");
    const [toDo,setToDo] = useState([{ category: "To-Do", task: "Backend", assignee: "Deadpool" },{ category: "To-Do", task: "UI Design", assignee: "Wolverine" }])
    const [inProgress, setInProgress] = useState( [{ category: "In-Progress", task: "Frontend", assignee: "Spiderman" },{ category: "In-Progress", task: "Testing", assignee: "Hulk" }])
    const [inReview, setInReview] = useState([{category: "in-review", task: "figma design", assignee: "Captain america"}])
    const [done, setDone] = useState([{ category: "Done", task: "Database", assignee: "Ironman" },{ category: "Done", task: "Deployment", assignee: "Thor" }])

    const tasks = [...toDo,...inProgress,...inReview,...done]
    const handleInProgress = (tasktoMove) => {
        setToDo(prev => prev.filter(task => task !== tasktoMove))
        setInProgress(prev => [...prev,{...tasktoMove, category:"In-Progress"}])
    }
    const handleInReview = (tasktoMove) => {
        setInProgress(prev => prev.filter(task => task !== tasktoMove))
        setInReview(prev => [...prev,{...tasktoMove,category : "in-review"}])
    }
    const handleDone = (tasktoMove) => {
        setDone(prev =>[...prev,{...tasktoMove,category : "Done"}])
        setInReview(prev => prev.filter(task => task !== tasktoMove))
    }
    const filteredSearch = tasks.filter((task) =>
        task.task.toLowerCase().includes(search.toLowerCase()) ||
        task.category.toLowerCase().includes(search.toLowerCase()) ||
        task.assignee.toLowerCase().includes(search.toLowerCase())
    )
    return(
        <div className={"projectBody"}>
            <h3>Project</h3>
            <div className={"searchBar"}>
                <input
                    type={"text"}
                    placeholder={"Search"}
                    name={"search"}
                    onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div className={"first-row"}>
                    <div className={"out-container"} align={"center"}>
                        <h4><img src={"src/assets/check_box.svg"} alt={"check-box"} />To-Do</h4>
                        <div className={"in-container"}>
                            {filteredSearch.filter(task => task.category === "To-Do").length > 0 ? (
                                filteredSearch
                                    .filter(task => task.category === "To-Do")
                                    .map((task,index) => (
                                        <div className={"in-container-item"} key={index}>
                                            <p>{task.task} - {task.assignee}</p>
                                            {(task.assignee === currUser && userRole === "team member") && (<button onClick={() => handleInProgress(task)} className={"item-btn"}>
                                            <img src={"src/assets/Check circle.svg"} alt={"move to in-progress"} />
                                            </button> )}
                                        </div>
                                    ))
                            ): (
                                <p>No tasks Found</p>
                            )}
                        </div>
                    </div>

                    <div className={"out-container"} align={"center"}>
                        <h4><img src={"src/assets/Loader.svg"} alt={"loading"} />In-Progress</h4>
                        <div className={"in-container"}>
                            {filteredSearch.filter(task => task.category === "In-Progress").length > 0 ? (
                                filteredSearch
                                    .filter(task => task.category === "In-Progress")
                                    .map((task, index) => (
                                        <div className={"in-container-item"} key={index}>
                                            <p>{task.task} - {task.assignee}</p>
                                            {(task.assignee === currUser && userRole === "team member") && (<button onClick={() => handleInReview(task)} className={"item-btn"}>
                                                <img src={"src/assets/Check circle.svg"} alt={"move to in-review"} />
                                            </button>)}
                                        </div>
                                    ))
                            ) : (
                                <p>No tasks found</p>
                            )}
                        </div>
                    </div>
            </div>

                <div className={"second-row"}>
                    <div className={"out-container"} align={"center"}>
                        <h4><img src={"src/assets/Clipboard.svg"} alt={"in-review"} />In Review</h4>
                        <div className={"in-container"}>
                            {filteredSearch.filter(task => task.category === "in-review").length > 0 ? (
                                filteredSearch
                                    .filter(task => task.category === "in-review")
                                    .map((task, index) => (
                                        <div className={"in-container-item"} key={index}>
                                            <p>{task.task} - {task.assignee}</p>
                                            {userRole === "team leader" && (<button onClick={() => handleDone(task)} className={"item-btn"}>
                                                <img src={"src/assets/Check circle.svg"} alt={"move to done"} />
                                            </button>)}
                                        </div>
                                    ))
                            ):(
                                <p>No tasks Found</p>
                            )}
                        </div>
                    </div>

                    <div className={"out-container"} align={"center"}>
                        <h4><img src={"src/assets/Thumbs up.svg"} alt={"Done"} />Done</h4>
                        <div className={"in-container"}>
                            {filteredSearch.filter(task => task.category === "Done").length > 0 ? (
                                filteredSearch
                                    .filter(task => task.category === "Done")
                                    .map((task, index) => (
                                        <p key={index}>{task.task} - {task.assignee}</p>
                                    ))
                            ):(
                                <p>No tasks Found</p>
                            )}
                        </div>
                    </div>
                </div>
        </div>
    )
}