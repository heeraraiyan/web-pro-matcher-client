

const WhyUs = () => {
    return (
        <div className="bg-slate-200 lg:flex justify-between mb-32 gap-4">

            <div className="flex justify-center items-center">
            <div>
                <h1 className="text-4xl text-amber-700 text-center mb-4 font-bold">Advance your career with <br></br>WEB PRO MATCHER</h1>
                <p className="text-xl text-stone-800">Create a free account, complete your profile, and get matched with your dream job.</p>
                <div className="md:flex mt-6 gap-8 w-11/12 mx-auto">
                    <div className="w-1/2">
                        <h1 className="text-3xl mb-4 text-slate-600 font-medium">Get seen by employers</h1>
                        <p>With a complete profile, your applications and profile are promoted to top employers, so you stand out.</p>
                    </div>
                    <div className="w-1/2">
                    <h1 className="text-3xl mb-4 text-slate-600 font-medium">Get access to top jobs</h1>
                        <p>Sign up for job alerts and be first in line for the latest jobs that match your profile.</p>
                    </div>
                </div>
            </div>
            </div>
            <img className="w-1/2 py-4 pr-4" src="https://i.ibb.co/ZGnHP62/pexels-andrea-piacquadio-3790833.jpg" alt="" />
            
        </div>
    );
};

export default WhyUs;