// Import images from assets folder
import Malaysia from '../assets/Top_Destinations/Malaysia.jpg'
import Indonesia from '../assets/Top_Destinations/Indonesia.jpg'
import Thailand from '../assets/Top_Destinations/Thailand (1).jpg'
import Vietnam from '../assets/Top_Destinations/Vietnam.jpg'
import Cambodia from '../assets/Top_Destinations/Cambodia.jpg'

const TopDestinations = () => {
    return (
        <div className='my-16 md:my-24 lg:my-32 top_destination_section'>
            <div className='text-center'>
                <h1 className='font-poppins text-3xl md:text-5xl font-semibold'>Top Destinations</h1>
                <p className='font-roboto text-base md:text-xl text-black text-opacity-85 mt-6 mb-10'>Explore our top destinations voted by more than 100,000+ <br /> customers around the world.</p>
            </div>
            <div className='top_destination_container grid grid-cols-2 md:grid-cols-5 gap-10'>
                <div className='destination_box font-roboto cursor-pointer'>
                    <div className='destination_1'>
                        <img className='rounded-full' src={Malaysia} alt="Malaysia" />
                    </div>
                    <h1 className='text-center text-base md:text-xl font-semibold mt-2 '>Malaysia</h1>
                </div>
                <div className='destination_box font-roboto cursor-pointer'>
                    <div className='destination_1'>
                        <img className='rounded-full' src={Indonesia} alt="Indonesia" />
                    </div>
                    <h1 className='text-center text-base md:text-xl font-semibold mt-2'>Indonesia</h1>
                </div>
                <div className='destination_box font-roboto cursor-pointer'>
                    <div className='destination_1'>
                        <img className='rounded-full' src={Thailand} alt="Thailand" />
                    </div>
                    <h1 className='text-center text-base md:text-xl font-semibold mt-2'>Thailand</h1>
                </div>
                <div className='destination_box font-roboto cursor-pointer'>
                    <div className='destination_1'>
                        <img className='rounded-full' src={Vietnam} alt="Vietnam" />
                    </div>
                    <h1 className='text-center text-base md:text-xl font-semibold mt-2'>Vietnam</h1>
                </div>
                <div className='destination_box font-roboto cursor-pointer'>
                    <div className='destination_1'>
                        <img className='rounded-full' src={Cambodia} alt="Cambodia" />
                    </div>
                    <h1 className='text-center text-base md:text-xl font-semibold mt-2'>Cambodia</h1>
                </div>
            </div>
        </div>
    );
};

export default TopDestinations;