// Import framer-motion from framer-motion site
import { motion } from "framer-motion"

// Import from Swiper js.
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import "swiper/css";

// Import Images from Assets folder.
import Hero_1 from '../assets/hero_picture/hero_1.jpg'
import Hero_2 from '../assets/hero_picture/hero_2.jpg'
import Hero_3 from '../assets/hero_picture/hero_3.jpg'
import Hero_4 from '../assets/hero_picture/hero_4.jpg'
import Hero_5 from '../assets/hero_picture/hero_5.jpg'
import Hero_6 from '../assets/hero_picture/hero_6.jpg'


const HeroSection = () => {

    return (
        <div className="relative flex items-center">
            <Swiper
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                loop={true}
                modules={[Autoplay, Navigation]}

                className="mySwiper">
                <SwiperSlide>
                    <div className="hero_slider relative">
                        <img className="" src={Hero_3} alt="" />
                        <div className="slider_content_1 flex flex-col justify-center ml-4 md:ml-0 space-y-2 md:space-y-6 h-full absolute top-0">
                            <motion.h1
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ opacity: 1, duration: 0.3, y: 0 }}
                                transition={{ duration: 0.5, ease: "linear" }}
                                className="slide_title_1 font-poppins text-white text-2xl md:text-5xl lg:text-6xl">Explore Southeast Asia</motion.h1>
                            <motion.p
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
                                className="font-roboto text-white text-opacity-65  max-w-[350px] md:max-w-[500px] text-base md:text-xl">Discover the hidden gems of Southeast Asia, from the bustling streets of Bangladesh to the tranquil beaches of Indonesia. Experience the diversity and vibrancy of these beautiful countries.</motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1, ease: "linear" }} >
                                <button className="btn bg-blue-500 border-blue-500 text-white hover:bg-blue-400 duration-300 font-poppins">Explore More</button>
                            </motion.div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero_slider relative">
                        <img className="" src={Hero_2} alt="" />
                        <div className="slider_content_2 flex flex-col justify-center ml-4 md:ml-0 space-y-2 md:space-y-6 h-full absolute top-0">
                            <motion.h1
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ opacity: 1, duration: 0.3, y: 0 }}
                                transition={{ duration: 0.5, ease: "linear" }}
                                className="font-poppins text-white text-2xl md:text-5xl lg:text-6xl">Your Travel Diary</motion.h1>
                            <motion.p
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
                                className="font-roboto text-white text-opacity-65  max-w-[350px] md:max-w-[500px] text-base md:text-xl">Join Travelors today and let us guide you through the enchanting landscapes of Malaysia and beyond. We are here to make your travel dreams come true. Experience the diversity and vibrancy of these beautiful countries.</motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1, ease: "linear" }}>
                                <button className="btn bg-blue-500 border-blue-500 text-white hover:bg-blue-400 duration-300 font-poppins">Explore More</button>
                            </motion.div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero_slider relative">
                        <img src={Hero_1} alt="" />
                        <div className="slider_content_3 text-white flex flex-col ml-4 md:ml-0 justify-center space-y-6 h-full absolute top-0">
                            <motion.h1
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ opacity: 1, duration: 0.3, y: 0 }}
                                transition={{ duration: 0.5, ease: "linear" }}
                                className="font-poppins text-white text-2xl md:text-5xl lg:text-6xl">Your Journey, Your Rules</motion.h1>
                            <motion.p
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
                                className="font-roboto text-white text-opacity-65  max-w-[350px] md:max-w-[500px] text-base md:text-xl">Add, update, or delete your favorite spots anytime. You are in control of your travel itinerary. Customize your journey according to your preferences and interests.</motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1, ease: "linear" }}>
                                <button className="btn bg-blue-500 border-blue-500 text-white hover:bg-blue-400 duration-300 font-poppins">Explore More</button>
                            </motion.div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero_slider relative">
                        <img src={Hero_4} alt="" />
                        <div className="slider_content_4 text-white flex flex-col ml-4 md:ml-0 justify-center space-y-6 h-full absolute top-0">
                            <motion.h1
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ opacity: 1, duration: 0.3, y: 0 }}
                                transition={{ duration: 0.5, ease: "linear" }}
                                className="font-poppins text-white text-2xl md:text-5xl lg:text-6xl">Authentic Experiences</motion.h1>
                            <motion.p
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
                                className="font-roboto text-white text-opacity-65  max-w-[350px] md:max-w-[500px] text-base md:text-xl">Get a taste of local cultures from Cambodia to Vietnam. Experience authentic Southeast Asia with us. Immerse yourself in the traditions and lifestyles of the locals.</motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1, ease: "linear" }}>
                                <button className="btn bg-blue-500 border-blue-500 text-white hover:bg-blue-400 duration-300 font-poppins">Explore More</button>
                            </motion.div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero_slider relative">
                        <img src={Hero_5} alt="" />
                        <div className="slider_content_5 text-white flex flex-col ml-4 md:ml-0 justify-center space-y-6 h-full absolute top-0">
                            <motion.h1
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ opacity: 1, duration: 0.3, y: 0 }}
                                transition={{ duration: 0.5, ease: "linear" }}
                                className="font-poppins text-white text-2xl md:text-5xl lg:text-6xl">Easy and Secure</motion.h1>
                            <motion.p
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
                                className="font-roboto text-white text-opacity-65  max-w-[350px] md:max-w-[500px] text-base md:text-xl">With our secure Firebase authentication, your travel plans are safe and easy to manage. Rest assured, your information and travel plans are protected with us.</motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1, ease: "linear" }}>
                                <button className="btn bg-blue-500 border-blue-500 text-white hover:bg-blue-400 duration-300 font-poppins">Explore More</button>
                            </motion.div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero_slider relative">
                        <img src={Hero_6} alt="" />
                        <div className="slider_content_5 text-white flex flex-col ml-4 md:ml-0 justify-center space-y-6 h-full absolute top-0">
                            <motion.h1
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ opacity: 1, duration: 0.3, y: 0 }}
                                transition={{ duration: 0.5, ease: "linear" }}
                                className="font-poppins text-white text-2xl md:text-5xl lg:text-6xl">Your Travel Companion</motion.h1>
                            <motion.p
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
                                className="font-roboto text-white text-opacity-65  max-w-[350px] md:max-w-[500px] text-base md:text-xl">Add, update, or delete your favorite spots anytime. You are in control of your travel itinerary. Customize your journey according to your preferences and interests.</motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1, ease: "linear" }}>
                                <button className="btn font-poppins bg-blue-500 border-blue-500 text-white hover:bg-blue-400 duration-300">Explore More</button>
                            </motion.div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div >
    );
};

export default HeroSection;