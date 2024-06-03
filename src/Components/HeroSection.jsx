import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css/bundle';
import "swiper/css";


import Hero_1 from '../assets/hero_picture/hero_1.jpg'
import Hero_2 from '../assets/hero_picture/hero_2.jpg'
import Hero_3 from '../assets/hero_picture/hero_3.jpg'
import Hero_4 from '../assets/hero_picture/hero_4.jpg'
const HeroSection = () => {

    return (
        <div>

            <Swiper
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper">
                <SwiperSlide>
                    <div className="hero_slider">
                        <img className="" src={Hero_1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero_slider ">
                        <img className="" src={Hero_2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero_slider">
                        <img src={Hero_3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero_slider">
                        <img src={Hero_4} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    );
};

export default HeroSection;