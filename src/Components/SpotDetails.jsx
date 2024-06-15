import { NavLink } from "react-router-dom";
import spotImg from "../assets/picture/united.jpg"

const SpotDetails = () => {
    return (
        <div className="h-[400px] overflow-hidden relative flex justify-center items-center">
            <img src={spotImg} alt="spotImg" className="w-full" />
            <ul className="absolute z-50 font-medium font-poppins text-white flex gap-3 bg-slate-700 bg-opacity-55 h-full w-full  justify-center items-center">
                <NavLink to ="/" className="cursor-pointer">Home</NavLink>
                <li>/</li>
                <li className="cursor-pointer opacity-65">Spot Details</li>
            </ul>
        </div>
    );
};

export default SpotDetails;