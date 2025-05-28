import {Project} from "./Components/Project/Project.jsx";
import {Login} from "./Components/Login/Login.jsx";
import {TLDashboard} from "./Components/TLDashBoard/TLDashboard.jsx";
import {Summary} from "./Components/Summary/Summary.jsx";
import {Issue} from "./Components/Issue/Issue.jsx";
import {Goal} from "./Components/Goal/Goal.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Code} from "./Components/Code/Code.jsx";
import {ProjectContextProvider} from "./ProjectContextProvider.jsx";
import {List} from "./Components/List/List.jsx";
import {Team} from "./Components/Team/Team.jsx";
import {Profile} from "./Components/Profile/Profile.jsx";
function App() {
  return(
      <>
          <ProjectContextProvider>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/TLdashboard" element={<TLDashboard />} />
                <Route path="/summary" element={<Summary />} />
                <Route path="/goal" element={<Goal />} />
                <Route path="/issue" element={<Issue />} />
                <Route path="/project" element={<Project />} />
                <Route path={"/code"} element={<Code />} />
                <Route path={"/list"} element={<List />} />
                <Route path={"/team"} element={<Team/>} />
                <Route path={"/profile"} element={<Profile />} />
            </Routes>
          </BrowserRouter>
          </ProjectContextProvider>
      </>
  )
}

export default App
