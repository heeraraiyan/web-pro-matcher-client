import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";



const Home = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-cyan-400 to-sky-800">
            <Navbar></Navbar>
            <Banner></Banner>
            
            
            
        </div>

        <Categories></Categories>
        </div>
    );
};

export default Home;