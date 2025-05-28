import "../../CSSFiles/LoginBody.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
export function LoginBody() {
    const navigate = useNavigate();
    const initialValues = {
        email: "",
        password: ""
    }
    const [credentials, setCredentials] = useState(initialValues);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCredentials({
            ...credentials,
            [name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault(); // <-- This prevents page reload
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(email === 'skrishanzzz7@gmail.com' && password === 'gopi 2004'){
            navigate("/TLdashboard");
        } else {
            alert("Invalid credentials");
        }
    }

    return (
        <div className={"body"}>
            <div className={"container"}>
            <div className={"login-container"}>
                <h1 className={"login-heading"}>Connect every team, task and project together with taskie</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor={"email"}>Email</label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    required
                    />
                    <label htmlFor={"password"}>Password</label>
                    <input
                    type={"password"}
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                    required/>
                    <button className={"login-btn"} type={"submit"}>Login</button>
                    <p align={"center"} className={"dont-acc"}>You don't have an account</p>
                    <button className={"signup-btn"}>Sign Up</button>
                </form>
            </div>
            </div>
        </div>
    )
}