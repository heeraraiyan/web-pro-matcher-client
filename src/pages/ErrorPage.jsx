import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex space-x-5  bg-gray-300">
            <div className="lg:flex items-center justify-center mx-auto">
                <div>
                <h2 className="text-3xl text-slate-900 font-bold mb-8 pr-5">oops!!!<br></br> page not found!!!</h2>

                <Link to={'/'}><button className="btn-error text-xl p-2 rounded-lg pr- font-bold">Go to HOME</button></Link>
                </div>
       
        <img src="https://i.ibb.co/1XQJ730/istockphoto-1173328580-612x612.jpg" alt="" /><br></br>
        
    </div>
        </div>
    );
};

export default ErrorPage;