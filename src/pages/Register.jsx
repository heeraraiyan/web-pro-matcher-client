

import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";




const Register = () => {

    
    const {createUSer } = useContext(AuthContext);
    const navigate = useNavigate();

    const [registerSuccess,setRegisterSuccess] = useState('');
     const [registerError,setRegisterError] =useState('');

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photoURL = form.get("photoURL");
        const password = form.get('password');
        console.log(name, email, password,photoURL);

        setRegisterSuccess('');
        setRegisterError('');

        if(password.length < 6){
            setRegisterError('password should be 6 character or longer');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('your password should have at least one uppercase characters');
            return;
        }

        else if (!/[a-zA-Z0-9]*[!#$%&?][a-zA-Z0-9]*/.test(password)) {
            setRegisterError('Your password should have at least one special character (!, #, $, %, &, or ?)');
            return;
        }
       

        createUSer(email, password,name,photoURL)
        .then(result => {
          console.log(result.user);
          setRegisterSuccess('user created successfully')
          e.target.reset();
          navigate('/');
        })
        .catch(error => {
        console.error(error);
        setRegisterError(error.message);
      })
    }    
    return (

        
        <div className="bg-gradient-to-r from-cyan-400 to-sky-800">
            <Navbar></Navbar>
            <h1 className="text-5xl font-bold text-sky-900 italic text-center mt-8">Register now!</h1>
       <div className="md:flex items-center justify-center">
        <div className="ml-20">
            <img src="https://i.ibb.co/rGc9JLm/shape-scene-woman-working-1.png" alt="" />
        </div>

       <div className="hero min-h-screen ">
  <div className="hero-content flex-col ">
    <div className="text-center">
      
    </div>
    <div className=" flex-shrink-0 w-full max-w-sm shadow-2xl   bg-cyan-600 px-10 py-10">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-slate-950 font-bold">Name</span>
          </label>
          <input type="text" name="name" placeholder="write your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-slate-950 font-bold">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
       <label className="label">
       <span className="label-text text-slate-950 font-bold">Photo URL</span>
             </label>
           <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" />
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
          <button className="btn btn-primary">Register</button>
        </div>
    </form>
    {
        registerError && <p className="text-red-700">{registerError}</p>
    }

    {
        registerSuccess && <p className="text-green-600">{registerSuccess}</p>
    }
        <p className="">Already have an account? please <Link className="text-white bg-blue-500 px-2 py-1 text-3xl rounded-lg" to="/Login">Login</Link></p>
    </div>
  </div>
</div>
       </div>
      </div>
      
      
       
    );
};

export default Register;