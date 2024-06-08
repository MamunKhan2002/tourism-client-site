import ExploreTour from "../../Components/ExploreTour";
import HeroSection from "../../Components/HeroSection";
import NewsAndBlogs from "../../Components/NewsAndBlogs";
import TopDestinations from "../../Components/TopDestinations";


const HomePage = () => {

    return (
        <div>
            <HeroSection />
            <TopDestinations />
            <ExploreTour />
            <NewsAndBlogs />
            {/* Home Page is here... */}
        </div>
    );
};

export default HomePage;