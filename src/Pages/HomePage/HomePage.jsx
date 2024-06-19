import ChooseDestination from "../../Components/ChooseDestination";
import ExploreTour from "../../Components/ExploreTour";
import FeaturedDestinations from "../../Components/FeaturedDestinations";
import HeroSection from "../../Components/HeroSection";
import NewsAndBlogs from "../../Components/NewsAndBlogs";
import TopDestinations from "../../Components/TopDestinations";


const HomePage = () => {

    return (
        <div>
            <HeroSection />
            <TopDestinations />
            <FeaturedDestinations />
            <ExploreTour />
            <ChooseDestination />
            <NewsAndBlogs />
            {/* Home Page is here... */}
        </div>
    );
};

export default HomePage;