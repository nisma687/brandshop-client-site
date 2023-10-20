import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { NavLink, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {loading,user}=useContext(AuthContext);
    const location=useLocation();
    if(loading)
    {
        return <span 
        className="
        loading loading-dots 
        text-center  
        flex  items-center justify-center
        loading-lg
        ">
        </span>;
    }
    if(user)
    {
        return children;
    }
    return <NavLink
    state={location.pathname}
     to="/logIn"></NavLink>

};

export default PrivateRoute;