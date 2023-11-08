import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const AllJobs = () => {
    const allJobs = useLoaderData();
    const [selectedCategory, setSelectedCategory] = useState('Web Development');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    // Define your category options
    const categoryOptions = ['Web Development', 'Digital Marketing', 'Graphic Design'];

    // Filter jobs based on the selected category
    const filteredJobs = allJobs.filter((job) => job.category === selectedCategory);



    return (
        <div className="bg-slate-200">
            <Navbar></Navbar>
            <h1 className="text-4xl text-slate-700 text-center font-bold pt-10">JOBS!</h1>

            <div className="mb-4 text-center mt-5">
                    <label htmlFor="category">Select a Category:</label>
                    <select
                        id="category"
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        value={selectedCategory}
                    >
                        {categoryOptions.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-4 py-20">
                {/* Add a dropdown for selecting the category */}
                

                {filteredJobs.map((job) => (
                    <div key={job._id} className="job-card  bg-sky-700 text-slate-100 font-bold h-[250px] w-[500px] text-center">
                        <h3 className="pt-8">{job.job_title}</h3>
                        <p>Category: {job.category}</p>
                        <p>Deadline: {job.deadline}</p>
                        <p>Price Range: {job.price_range}</p>
                        <p>Description: {job.short_description}</p>
                        <Link to={`/details/${job._id}`}>
                            <button className="btn btn-success mt-2">Bid Now</button>
                        </Link>
                    </div>
                ))}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllJobs;