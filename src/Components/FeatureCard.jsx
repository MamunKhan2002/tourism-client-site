import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import { IoLocationSharp } from "react-icons/io5";
import { FaPeopleGroup, FaMapLocationDot } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TbBrandDaysCounter } from "react-icons/tb";




const FeatureCard = ({ card }) => {

    const { image, tourists_spot_name, country_name, totalVisitorsPerYear, location, short_description, average_cost, seasonality, travel_time } = card;
    return (
        <div className="card bg-base-100 shadow-xl relative cursor-pointer">
            <figure className="px-2 pt-2">
                <img src={image} alt="Spot" className="rounded-xl" />
            </figure>
            <div className="px-5 pb-6 mt-3 space-y-3">
                <div className='flex items-center justify-between'>
                    <div className=''>
                        <h2 className="card-title font-poppins">{tourists_spot_name}</h2>
                        <p className='font-roboto'>Specially for {seasonality}</p>
                    </div>
                    <TiWeatherPartlySunny className='text-3xl text-[#FDB813]' />
                </div>

                <div className='flex justify-between font-roboto'>
                    <h1>{average_cost} / Person</h1>
                    <h1 className='flex gap-1 items-center'><TbBrandDaysCounter /> {travel_time}</h1>
                </div>
                <div className='flex justify-between items-center font-roboto'>
                    <h1 className='flex items-center gap-1'><FaPeopleGroup /> {totalVisitorsPerYear} / Per Year</h1>
                    <h1 className='flex gap-1 items-center'><FaMapLocationDot className='text-xl text-[#35A483' /> {location}</h1>
                </div>
                <div className="card-actions ">
                    <Link to="/spot_details" className="btn w-full bg-[#35A483] text-white hover:bg-[#35A276]">View Details</Link>
                </div>
            </div>
            <h1 className='py-2 px-4 absolute top-4 right-4 bg-[#35A483] text-white font-roboto font-medium rounded-l-full rounded-r-full max-w-fit flex items-center gap-1'><IoLocationSharp className='text-red-600 text-xl' /> Location {country_name}</h1>
        </div>
    );
};

FeatureCard.propTypes = {
    card: PropTypes.object.isRequired
}
export default FeatureCard;