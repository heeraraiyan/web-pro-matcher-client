import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Latest from "../components/Latest";
import Navbar from "../components/Navbar";
import WhyUs from "../components/WhyUs";




const Home = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-cyan-400 to-sky-800">
            <Navbar></Navbar>
            <Banner></Banner>
            
            
            
        </div>

        <Categories></Categories>
        <WhyUs></WhyUs>
        <Latest></Latest>

        
        </div>
    );
};

export default Home;