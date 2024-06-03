import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import ContactUs from "../Components/ContactUs";
import AboutUs from "../Components/AboutUs";
import AllTouristSpot from "../Components/AllTouristSpot";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: 1,
                element: <HomePage />
            },
            {
                path: '/all-tourist-spot',
                element: <AllTouristSpot />
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router;