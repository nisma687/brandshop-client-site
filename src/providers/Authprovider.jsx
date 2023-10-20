import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext=createContext(null);
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const[user,setUser]=useState(null);
    const [loading, setLoading] = useState(true);
    // user creation with email and password function
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login with email and password function
    const login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // logout function
    const logOut=()=>
    {
        setLoading(true);
        return signOut(auth);   
    }
    // signUpWitHGoogle
    const provider = new GoogleAuthProvider();
    const signUpWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

   
    // checking the states of user
    useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth, (user)=>{
            setUser(user);
            setLoading(false);
        });
        return()=>{
            unsubscribe();

        }
    },[]);

  
    const authInfo={
        user,
        createUser,loading,
        login,logOut,signUpWithGoogle
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
