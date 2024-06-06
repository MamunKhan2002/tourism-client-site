import { motion } from "framer-motion"



import exp_icon_1 from '../assets/icons/exp-icon1.webp'
import exp_icon_2 from '../assets/icons/exp-icon2.webp'
import exp_img_1 from '../assets/picture/exp1.webp'
import exp_img_2 from '../assets/picture/exp2.webp'
import star from '../assets/icons/star.webp'

const ExploreTour = () => {
    return (
        <div className='Explore_tour_container flex flex-col lg:flex-row md:gap-20 mb-16 md:mb-24 lg:mb-32'>
            <div className='w-3/4 lg:w-2/4 mx-auto relative flex flex-col gap-10 mb-10'>
                <img className='lg:absolute w-3/5  absolute right-0 -bottom-3 lg:bottom-0 rounded-2xl' src={exp_img_2} alt="images" />
                <motion.img
                    initial={{ opacity: 0, x: -500 }}
                    whileInView={{ opacity: 1, x: 0, duration: 0.3 }}
                    transition={{ type: "spring", stiffness: 100, duration: 0.9, ease: "linear" }}
                    className='lg:absolute w-3/4 lg:top-0 left-0 rounded-2xl -z-10' src={exp_img_1} alt="images" />
            </div>
            <div className='lg:w-2/4'>
                <div className='flex items-center gap-3'>
                    <img src={star} alt="star" />
                    <h3 className='text-2xl text-black text-opacity-55 mb-3'>Explore Tour</h3>
                </div>
                <h1 className='text-3xl md:text-5xl font-poppins font-semibold'>Experience the World with Our Company</h1>
                <p className='text-base md:text-xl font-roboto font-medium text-black text-opacity-55 mt-5'>Discover 390 unique destinations worldwide, with top-rated experiences and exceptional customer service. Join our diverse global visitors and create unforgettable memories with us.</p>

                <div className='Explore_content_container border-b-2 pb-10 mt-10'>
                    <div className='Visa_container flex flex-col pr-5 md:border-r-2 border-gray-400 bg-opacity-55 border-opacity-45'>
                        <div className='flex gap-4 items-center'>
                            <img src={exp_icon_1} alt="exp_icon_1" />
                            <h2 className='text-2xl font-roboto font-semibold'>Visa Get In 2 Days</h2>
                        </div>
                        <p className='font-roboto text-base text-black text-opacity-55 mt-3'>Get your travel visa in just 2 days with our expedited service, ensuring a hassle-free start to your adventure.</p>
                    </div>
                    <div className='flex flex-col pl-5'>
                        <div className='flex gap-4 items-center'>
                            <img src={exp_icon_2} alt="exp_icon_2" />
                            <h2 className='text-2xl font-roboto font-semibold'>Best Travel Agents</h2>
                        </div>
                        <p className='font-roboto text-base text-black text-opacity-55 mt-3'>Rated as the best in the industry, our travel agents offer unparalleled expertise and personalized service for an unforgettable journey.</p>
                    </div>
                </div>
                {/* Button */}
                <a href="#_" className="relative my-10 inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative uppercase">BOOKING</span>
                </a>
            </div>
        </div>
    );
};

export default ExploreTour;