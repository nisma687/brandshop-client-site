import { createContext, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext=createContext();
const Authprovider = ({children}) => {
    const auth = getAuth(app);
    const[loading,setLoading]=useState(true);
    const[user,setUser]=useState(null);
    // creating user
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // signin
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    // signout
    const signOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    // authuserstatechange
    onAuthStateChanged(auth, (result) => {
        if (result) {
          console.log(result);
          setLoading(false);
        } else {
          console.log('user is not signed in');
          setLoading(false);
        }
      });
    const authInfo={
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default Authprovider;