import { useContext, useState } from "react";

import { Link, useLocation,  useNavigate } 
from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";




const Login = () => {
const {login}=useContext(AuthContext);
const location=useLocation();
const navigate=useNavigate();
const [error,setError]=useState('');
const [success,setSuccess]=useState('');
    const handleLogIn=(e)=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const email=form.get("email");
        const password=form.get("password");
        setError('');
        setSuccess('');
        // console.log(email,password);
        if(!email || !password)
        {
          setError("Please enter email and password");
          return;
        }
        login(email,password)
        .then(res=>{
          setSuccess("Login Successfully");
          console.log(res.user);
          navigate(location?.state? 
            location.state : "/")
        })
        .catch(error=>{
        
          setError(error.message);
          console.log(error.message);
        })

    }



    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl mb-4 font-bold">Please Login!!!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
            onClick={handleLogIn}
             className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" 
                name="email"
                placeholder="email"
                required
                 className="input input-bordered"
               
                 />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"
                name="password" 
                placeholder="password" className="input input-bordered" 
                required
                 />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

              <p className="mt-3">Do not have an account?please go to the <Link className="text-blue-800 font-bold" to="/register">Registration </Link> Page </p>
              {
                error && <p className="text-red-500">{error}</p>
              }
              {
                success && <p className="text-green-500">{success}</p>
              }
            </form>
          
          </div>
        </div>
      </div>
    );
};

export default Login;