import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MyPostedJobs = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user.email;

    const jobs = useLoaderData();

    const userJobs = jobs.filter((job) => job.email === userEmail);
    

    return (
        <div className="bg-gradient-to-r from-cyan-100 to-sky-300">
            <Navbar></Navbar>

            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-4 py-20 ">
          {userJobs.map((job) => (
            <div key={job._id} className="job-card  bg-sky-700 text-slate-100 font-bold h-[250px] lg:[600px] text-center">
              <h3 className="pt-8">{job.job_title}</h3>
              <p>Category: {job.category}</p>
              <p>Deadline: {job.deadline}</p>
              <p>Price Range: {job.price_range}</p>
              <p>Description: {job.short_description}</p>
              <Link to={`/updatejob/${job._id}`}><button className="btn btn-info">Update</button></Link>
              
            </div>
          ))}
        </div>
        <Footer></Footer>
        </div>
    );
};

export default MyPostedJobs;