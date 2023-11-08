import { useLoaderData } from "react-router-dom";


const AllJobs = () => {
    const allJobs = useLoaderData();


    return (
        <div>
        {/* <h1>Total Jobs: {allJobs.length}</h1> */}
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-4 my-20 ">
          {allJobs.map((job) => (
            <div key={job._id} className="job-card  bg-sky-700 text-slate-100 font-bold h-[250px] w-[500px] text-center">
              <h3 className="pt-8">{job.job_title}</h3>
              <p>Category: {job.category}</p>
              <p>Deadline: {job.deadline}</p>
              <p>Price Range: {job.price_range}</p>
              <p>Description: {job.short_description}</p>
              <button className="btn btn-success mt-2">Bid Now</button>
            </div>
          ))}
        </div>
      </div>
    );
};

export default AllJobs;