import Swal from 'sweetalert2'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';

const AddJobs = () => {

  const { user } = useContext(AuthContext);
    const userEmail = user.email;

    const handleAddjobs = event => {
        event.preventDefault();

    
        const form = event.target;
        
        
        const category = form.category.value;
        const job_title = form.job_title.value;
        const deadline = form.deadline.value;
        const price_range = form.price_range.value;
         const short_description = form.short_description.value;
    
        const newJobs = {category,job_title,deadline,price_range,short_description,email: userEmail}
    
        console.log(newJobs)
    
        // send to server 
    
        fetch('https://web-pro-matcher-server.vercel.app/addJobs',{
          method: 'POST',
          headers:{
            'content-type' :'application/json'
          },
          body: JSON.stringify(newJobs)
    
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'job Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
          }
        })
    
    
      }
    
        return (
            <div className="bg-gradient-to-r from-cyan-100 to-sky-300">
                <Navbar></Navbar>
                <h2 className="text-3xl text-orange-700 font-bold mt-10 text-center">ADD JOBS <br></br><span className="italic text-xl text-amber-600">HERE</span> </h2>
                <div className="pb-32 mt-10 w-11/12 mx-auto">
                 
                <form onSubmit={handleAddjobs}>
               <div className="">
              
    
              
               </div>
    
               <div className=" mt-8">
               <div className="lg:w-1/2"> 
              <label className="text-xl font-bold">Category: </label>
              <select className="w-10/12" name="category" >
                <option value="Web Development">Web Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Graphics design">Graphics design</option>
                
                
              </select>

              <div className="mt-8">
              <label className="text-xl font-bold">Job Title: </label>
              <input className="w-3/4" type="text" name="job_title" placeholder="job title" required />
                </div>
              </div>

              <div className="mt-8 lg:w-1/2">
              <label className="text-xl font-bold">Deadline: </label>
              <input className="w-3/4" type="text" name="deadline" placeholder="deadline" required />
                </div>
             
    
               </div>
               <div className=" mt-8">
               <div className="lg:w-1/2">
              <label className="text-xl font-bold">Price range: </label>
              <input className="w-3/4" type="text" name="price_range" placeholder="price" required />
                </div>
    
                
    
               
                </div>
    
                <div className="mt-8">
              <label className="text-xl font-bold">Short Description: </label>
              <input className="w-3/4" type="text" name="short_description" placeholder="" required />
                </div>
    
                <button className="btn btn-outline btn-warning btn-block mt-24 text-2xl font-bold" type="submit">Add Job</button>
              
                </form>
                </div>
                <Footer></Footer>
                
            </div>
        );
};

export default AddJobs;