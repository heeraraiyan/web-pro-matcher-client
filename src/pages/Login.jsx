

import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";



const Login = () => {

    const { signIn , signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [loginError, setLoginError] = useState('');
    // console.log(user)

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        console.log(email,password)
        setLoginError('');
        
        signIn(email, password)
        .then(result=>{
          console.log(result.user);
          e.target.reset();
          navigate(location?.state ? location .state : '/');
        })
          .catch(error => {
          console.error(error);
          setLoginError("Email and password do not match. Please try again.");
        })
    }

    const handleGoogle = () => {
      signInWithGoogle()
      .then(result => {
        console.log(result.user)
      })
      .catch(error =>{
        console.error(error)
      })
    }
    return (
        <div className="bg-gradient-to-r from-cyan-400 to-sky-800">
            <Navbar></Navbar>

            <h1 className="text-5xl font-bold text-sky-900 italic text-center mt-8">Login now!</h1>
              <div className="md:flex items-center justify-center">
                <div className="ml-20">
                    {/* <img src="https://i.ibb.co/ThRJc9F/273-2738804-php-login-and-authentication-login-hd-png-download.png" alt="" /> */}
                    <img src="https://i.ibb.co/jyZsS6M/image-login.png" alt="" />
                </div>
              <div className="hero min-h-screen  ">
  <div className="hero-content flex-col ">
    <div className="text-center">
     
     
    </div>
    <div className=" flex-shrink-0 w-full max-w-md shadow-2xl  bg-cyan-600 px-10 py-10">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-slate-950 font-bold ">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-slate-950 font-bold">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
    </form>

    {loginError && (
              <p className="text-red-700 text-center mt-4">{loginError}</p>
            )}
         <p>Dont have an account? please <Link className="text-white  bg-blue-500 px-2 py-1 text-3xl rounded-lg" to="/Register">Register</Link></p> .
         <p>Log in with  <button onClick={handleGoogle} className="btn-info px-2 py-1">Google</button></p>          
    </div>
  </div>
</div>
              </div>
        </div>
     
            
    
    );
};

export default Login;