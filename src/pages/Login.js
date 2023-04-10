import { Link, useNavigate } from "react-router-dom"
import "./css.css" 
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
function Login(){

    const navigate = useNavigate()
    const [err, setErr] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()  // stop refreshing the page
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
        } catch (err) {
            console.log(err)
            setErr(true)
        }
    }
    return (
        <div className="Register-page">
            <div className="Regsiter-box">
                <div className="appName">AppName</div>
                <div className="page-type">Login</div>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Enter your Email" />
                    <input type="password" placeholder="Enter passowrd" />
                    <button className="Signup-btn">Login</button>
                    {err && <span>Something went Wrong</span>}
                    <p className="DirToLoginsignup" >Don't have Account ? <Link style={{cursor:"pointer"}} to="/register">Signup</Link> </p>
                </form>
            </div>
        </div>
    )
}

export default Login;