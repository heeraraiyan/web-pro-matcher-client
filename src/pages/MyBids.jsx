import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MyBids = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user.email;

    const bids = useLoaderData().filter((bid) => bid.userEmail === userEmail);

    return (
        <div className="bg-slate-800 text-slate-50 min-h-screen">
            <Navbar></Navbar>
            <div>
            <div className="w-11/12 mx-auto  pb-10">
            {bids.map((bid) => (
                <div key={bid._id} className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      
                      <th>Email</th>
                      <th>Job</th>
                      <th>price range</th>
                      <th>Deadline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>{bid.userEmail}</th>
                      <td>{bid.job_title}</td>
                      <td>{bid.price_range}</td>
                      <td>{bid.deadline}</td>
                      <td><button className="btn btn-info">complete</button></td>
                    </tr>
                   
                    
                  </tbody>
                </table>
              </div>
            ))}
        </div>
            </div>
            {/* <Footer></Footer> */}
            
        </div>
    );
};

export default MyBids;