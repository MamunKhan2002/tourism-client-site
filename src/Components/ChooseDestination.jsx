import France from "../assets/picture/France.jpg"
import China from "../assets/picture/China.jpg"
import Cambodia from "../assets/picture/Cambodia.jpg"
import Thailand from "../assets/picture/Thailand.jpg"
import Indonesia from "../assets/picture/Indonesia.jpg"
import Malaysia from "../assets/picture/Malaysia.jpg"
import Bangladesh from "../assets/picture/Bangladesh.png"

const ChooseDestination = () => {
    return (
        <div className="ChooseDestination_Container">
            {/* Choose Your Destination Title Description] */}
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-poppins">Choose Your Destination</h1>
                <p className="text-base lg:text-xl font-roboto max-w-[660px] md:max-w-5xl mt-3 mx-auto">Gros Piton and Petit Piton, are a wonder to behold. The majestic peaks tower above the sea and hold the history of the Caribbean island.</p>
            </div>
            {/*  Choose Your Destination Gallery */}
            <div className="Destination_Gallery_Container mt-6 md:mt-10 lg:mt-20">
                <div className="img_card_1 h-[400px] w-full overflow-hidden relative cursor-pointer">
                    <img className="h-full w-full rounded-lg" src={China} alt="" />
                    <h1 className="absolute top-0 text-white font-poppins font-semibold p-3 bg-[#35A483] rounded-md z-40">China</h1>
                </div>
                <div className="relative img_card_2 h-[400px] w-full overflow-hidden cursor-pointer">
                    <img className="h-full w-full rounded-lg" src={Thailand} alt="" />
                    <h1 className="absolute top-0 text-white font-poppins font-semibold p-3 bg-[#35A483] rounded-md z-40">Thailand</h1>
                </div>
                <div className="relative img_card_3 h-[400px] w-full overflow-hidden cursor-pointer">
                    <img className="h-full w-full rounded-lg" src={Cambodia} alt="Cambodia" />
                    <h1 className="absolute top-0 text-white font-poppins font-semibold p-3 bg-[#35A483] rounded-md z-40">Cambodia</h1>
                </div>
                <div className="relative img_card_4 h-[400px] w-full overflow-hidden cursor-pointer">
                    <img className="h-full w-full rounded-lg" src={Indonesia} alt="Indonesia" />
                    <h1 className="absolute top-0 text-white font-poppins font-semibold p-3 bg-[#35A483] rounded-md z-40">Indonesia</h1>
                </div>
                <div className="relative img_card_5 h-[400px] w-full overflow-hidden cursor-pointer">
                    <img className="h-full w-full rounded-lg" src={Malaysia} alt="Malaysia" />
                    <h1 className="absolute top-0 text-white font-poppins font-semibold p-3 bg-[#35A483] rounded-md z-40">Malaysia</h1>
                </div>
                <div className="relative img_card_6 h-[400px] w-full overflow-hidden cursor-pointer">
                    <img className="h-full w-full rounded-lg" src={Bangladesh} alt="Bangladesh" />
                    <h1 className="absolute top-0 text-white font-poppins font-semibold p-3 bg-[#35A483] rounded-md z-40">Bangladesh</h1>
                </div>
                <div className="relative img_card_7 h-[400px] w-full overflow-hidden cursor-pointer">
                    <img className="h-full w-full rounded-lg" src={France} alt="France" />
                    <h1 className="absolute top-0 text-white font-poppins font-semibold p-3 bg-[#35A483] rounded-md z-40">France</h1>
                </div>
            </div>
        </div>
    );
};

export default ChooseDestination;