import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";



const Details = () => {
    const handleAddCart = (event) =>{
        event.preventDefault();

        // const userCart = {userEmail, image,name,price};
        // console.log(userCart)

        
    fetch('http://localhost:5000/bid',{
        method: 'POST',
        headers:{
          'content-type' :'application/json'
        },
        body: JSON.stringify(userCart)
  
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: 'Success!',
            text: 'Product Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })

    }
    const job = useLoaderData();
    const {category,job_title,deadline,price_range,short_description} = job;
    
    const {user} =useContext(AuthContext);
  const userEmail = user.email;
  const userCart = {userEmail,price_range,job_title,deadline}
  console.log(userCart)

    return (
        <div className="  bg-slate-600">
            <Navbar></Navbar>
            <div className="flex items-center justify-center mt-8 pb-5">

            <div className="card w-2/5 bg-sky-950 shadow-xl">
             {/* <figure><img className="h-[350px] mt-4" src={image} alt="Shoes" /></figure> */}
             <div className="card-body">
               <h2 className="card-title text-amber-600">{job_title}</h2>
               <p className="text-white">{price_range}</p>
               
               <p className="text-slate-300">{short_description}<br></br> Explore a wide range of clothing and accessories, from casual to formal wear.that are not only stylish but also comfortable to wear.</p>
               <div className="card-actions justify-end">
                <input type="text" />
                 <Link to={'/mybids'}><button onClick={handleAddCart} className="btn btn-primary">Bid on the Project</button></Link>
               </div>
             </div>
                   </div>
            </div>
        </div>
    );
};

export default Details;