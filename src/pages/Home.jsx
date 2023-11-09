
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Latest from "../components/Latest";
import Navbar from "../components/Navbar";
import WhyUs from "../components/WhyUs";




const Home = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-cyan-100 to-sky-300">
            <Navbar></Navbar>
            <Banner></Banner>
            
            
            
        </div>

        <Categories></Categories>
        <WhyUs></WhyUs>
        <Latest></Latest>
        <Footer></Footer>

        
        </div>
    );
};

export default Home;