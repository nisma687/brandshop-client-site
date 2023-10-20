import { useContext,
   useState } from "react";
import { Link } from "react-router-dom";

import { updateProfile } from "firebase/auth";
import { AuthContext } from "../providers/AuthProvider";

const Registration = () => {

  const{createUser,user,signUpWithGoogle}=useContext(AuthContext);
  const [error,setError]=useState('');
const [success,setSuccess]=useState('');
    // console.log(user); 
    const handleRegister=(e)=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const email=form.get("email");
        const password=form.get("password");
        const name=form.get("name");
        const photoUrl=form.get("photoUrl");
        // console.log(email,password,name,photoUrl);
        setError('');
        setSuccess('');
        if(!email || !password || !name || !photoUrl)
        {
          setError("Please enter all the fields");
          return;
        }
        else if(password.length<6)
        {
          setError("Password must be atleast 6 characters");
          return;
        }
        else if(!email.includes("@"))
        {
          setError("Please enter valid email");
          return;
        }
        else if(!/[A-Z]/.test(password))
        {
            setError("password should contain at least one uppercase letter");
            return;
        }
       

        createUser(email,password)
        .then(res=>{
          setError("");
          setSuccess("Account created successfully")
          console.log(res.user);
          // update profile
        updateProfile(res.user, {
            displayName: name,
            photoURL: photoUrl
        })
          
        
        })
        .catch(error=>{
          setError(error.message);
          console.log(error.message);
        })
       
        

    }

    const handleGoogleSignIn=()=>{
      setError ('');
      setSuccess('');

      signUpWithGoogle()
      .then(res=>{
        setError("");
        setSuccess("Account created successfully")
        console.log(res.user);
        // update profile
      updateProfile(res.user, {
          displayName: res.user.displayName,
          photoURL: res.user.photoURL
      })
        
      
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
            <h1 className="text-5xl mb-4 font-bold">Register Now!!!</h1>
            <p className="text-xl mt-2 mb-2">Please fill out the form below to create an account.</p>

            <button
            onClick={handleGoogleSignIn}
             className="btn mt-2 mb-2 btn-primary">Sign Up with Google</button>
            <p className="text-xl mt-2 mb-2">OR</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
            onClick={handleRegister}
             className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" 
                name="name"
                placeholder="Your name" className="input input-bordered"
                required
                 />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" 
                name="photoUrl"
                placeholder="Url of Picture" className="input input-bordered"
                required
                 />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" 
                name="email"
                placeholder="email" className="input input-bordered"
                required
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
               
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary">Register</button>
              </div>

              <p className="mt-3">Have an account?please go to the <Link className="text-blue-800 font-bold" to="/logIn">Login </Link> Page </p>
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

export default Registration;