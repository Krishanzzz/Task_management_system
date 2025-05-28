import {useState} from "react";
import "../../CSSFiles/CodeBody.css";
export function CodeBody() {
    const [searchFiles, setSearchFiles] = useState("");
    const [files, setFiles] = useState([]);
    const handleFileUpload = () => {
        const detail = prompt("Upload in the format of (Format : Domain,GitHub repository link) :")
        if(!detail) return;
        const [domain,github] = detail.split(",")
        if(!domain || !github){
            alert("Invalid input format");
            return;
        }
        const file = {
            domain : domain.trim(),
            github : github.trim()
        }
        setFiles(prev => [...prev,file])
    }
    const filteredFiles = files.filter((file) =>
            file.domain.toLowerCase().includes(searchFiles.toLowerCase())
    );
    return (
        <div className="code-body">
            <div className={"heading"}>
                <h1>Code</h1>
                <button onClick={handleFileUpload} className={"git-btn"}>GitHub Repo</button>
            </div>
            <input type={"text"} placeholder={"Search"} name={"search"} onChange={(e) => setSearchFiles(e.target.value)} />

            <div className="file-container">
                {filteredFiles.length > 0 ? (
                    filteredFiles.map((file, index) => (
                        <div className="file-info" key={index}>
                            <span>{file.domain}</span>
                            <a href={file.github} target="_blank" rel="noopener noreferrer">
                                GitHub Repo
                            </a>
                        </div>
                    ))
                ) : (
                    <p>No Files Found</p>
                )}
            </div>
        </div>
    )
}