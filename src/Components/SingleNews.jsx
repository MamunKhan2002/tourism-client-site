import PropTypes from 'prop-types';
import date_icon from '../assets/picture/icons8-calendar-color-16.png'

const SingleNews = ({ singleNewsCard }) => {

    const { author_name, author_image, photo, title, description, date_time } = singleNewsCard;
    return (
        <div className="card bg-base-100 shadow-xl cursor-pointer relative border-2">
            <figure className="px-5 pt-5">
                <img src={photo} alt="photo" className="rounded-xl h-full w-full" />
            </figure>
            <div className="card-body">
                <h2 className="text-base font-poppins font-semibold">{title}</h2>
                <p className="">{description.slice(0, 100)}</p>
                <div className="flex gap-2clear border-2 border-[#35A483] border-opacity-35 justify-between items-center bg-white shadow-md w-9/12 rounded-full p-2 absolute  top-8 left-2/4 transform -translate-x-2/4 ">
                    <div className='flex gap-2 justify-start items-center'>
                        <img className="w-[35px] h-[35px] rounded-full" src={author_image} alt="author_image" />
                        <p className="text-base font-normal font-poppins">{author_name}</p>
                    </div>
                    <div className="font-roboto text-[15px] max-w-fit flex items-center gap-1">
                        <img src={date_icon} alt="" />
                        {new Date(date_time).toLocaleDateString()}
                    </div>
                </div>
                <button className="btn btn-primary border-[#35A483] hover:border-[#35A483] hover:bg-[#35A483] bg-[#35A483]">Read....</button>
            </div>
        </div>
    );
};

SingleNews.propTypes = {
    singleNewsCard: PropTypes.object.isRequired
}

export default SingleNews;