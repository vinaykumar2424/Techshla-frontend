import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./css.css"
import PcList from "../components/PcList.js"
import { db } from "../firebase"
const Home = () => {
    const { currentUser } = useContext(AuthContext)
    // console.log(currentUser)
    return (
        <div className="HomePage" style={{overflow:"hidden"}}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span className="navbar-brand" href="#">AppName</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => { signOut(auth) }} href="#">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <PcList />
        </div>
    )
}

export default Home;