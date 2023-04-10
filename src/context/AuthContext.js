import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    // console.log({ children })
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            // console.log(auth)
        });
        return () => {
            unsub();
        }
    }, []);
    return (
        <>

            <AuthContext.Provider value={{ currentUser }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}