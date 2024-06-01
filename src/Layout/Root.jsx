import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="main_container">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;