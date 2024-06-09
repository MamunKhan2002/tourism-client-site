import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";


const FeaturedDestinations = () => {
    const [allTourism, setAllTourism] = useState([]);

    const URL = "all_tourism.json"

    useEffect(() => {
        const LoaderAllTourismData = async () => {
            const response = await fetch(URL)
            const data = await response.json();
            setAllTourism(data)
        }

        LoaderAllTourismData()
    }, [URL]);

    console.log(allTourism);

    return (
        <div className="Feature_card_container my-16 md:my-24 lg:my-32 min-h-svh">
            {/* Title & descriptions */}
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-poppins">Featured Destinations</h1>
                <p className="text-base lg:text-xl font-roboto max-w-[660px] md:max-w-5xl mt-3 mx-auto">Explore our handpicked collection of premier tourist destinations worldwide. Click on each location to discover in-depth details, breathtaking images, and essential highlights. Begin planning your next extraordinary journey today!</p>
            </div>
            {/* Featured Destinations Cards*/}
            <div className="grid gap-5 grid-flow-col-1 md:grid-cols-2 lg:grid-cols-3 mt-6 md:mt-10 lg:mt-20">
                {
                    allTourism.map(card => <FeatureCard
                        key={card._id}
                        card={card}
                    ></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedDestinations;