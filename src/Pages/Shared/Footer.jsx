
import logo from '../../assets/Logo/Logo_png-removebg-preview.png'

const Footer = () => {
    return (
        <div className="bg-base-200">
            <div className="footer_container footer p-10  text-base-content">
                <aside>
                    <img className='w-4/5 h-4/5' src={logo} alt="" />
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Pages</h6>
                    <a href='/' className="link link-hover">Home</a>
                    <a href='/login' className="link link-hover">Login</a>
                    <a href='/register' className="link link-hover">Register</a>
                    <a href='/All Tourist Spot' className="link link-hover">All Tourist Spot</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
            <div className='h-[1px] bg-slate-700 bg-opacity-35 mb-3'></div>
            <div className='flex justify-center pb-3'>
                <small>&#169; 2024 Traveler. All rights reserved.</small>
            </div>
            <div className='h-[1px] bg-slate-700 bg-opacity-35'></div>
        </div>
    );
};

export default Footer;