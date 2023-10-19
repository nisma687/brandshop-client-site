import { createContext } from "react";


export const AuthContext=createContext();
const Authprovider = ({children}) => {

    // creating user
    // signin
    // signout
    // authuserstatechange
    const authInfo={}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default Authprovider;