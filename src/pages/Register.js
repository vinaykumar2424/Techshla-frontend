import "./css.css"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase"
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate()
    const [err, setErr] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()  // stop refreshing the page
        // console.log(e.target[0].value)
        let displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const user = res.user;
            // console.log(res.user)
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                displayName,
                email,
            });
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
                <div className="page-type">Register</div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your Name" />
                    <input type="email" placeholder="Enter your Email" />
                    <input type="password" placeholder="Enter passowrd" />
                    <button className="Signup-btn">Signup</button>
                    {err && <span>Something went Wrong</span>}
                </form>
                <p className="DirToLoginsignup" >Already Sigup ? <Link to="/login" style={{ cursor: "pointer" }}>Login</Link></p>
            </div>
        </div>
    )
}

export default Register;