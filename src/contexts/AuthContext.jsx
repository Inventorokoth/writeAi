import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../fIrebase/Firebase";


const AuthContext = createContext();

export const useAuth = () => {

    return useContext(AuthContext);
}



const AuthContextProvider = ({ children }) => {
    const [Currentuser, setCurrentUser] = useState(null);//check if this should be null or not

    const LOGIN = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const REGISTER = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })
        return () => Unsubscribe()//check this unsubscribe if it is supposed to be a function or not
    }, [])



    const values = {
        Currentuser,
        LOGIN,
        REGISTER
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;