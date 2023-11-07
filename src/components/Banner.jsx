

const Banner = () => {
    return (
        <div className="mt-8 pb-12 pr-4">
            <div className="hero h-[550px] w-9/12 mx-auto" style={{backgroundImage: 'url(https://i.ibb.co/hRNz5MF/pexels-mikael-blomkvist-6476566.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg">
      <h1 className="mb-5 text-5xl font-bold italic text-amber-600">...POST <span className="text-4xl font-bold text-slate-50">or</span> BID...<br></br><span className="text-slate-900 text-3xl">SUCCEED!</span></h1>
      <p className="mb-5 text-3xl">Your Job, Your Way: Post & Bid on Opportunities!</p>
      
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;