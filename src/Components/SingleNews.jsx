import PropTypes from 'prop-types';

const SingleNews = ({ singleNewsCard }) => {

    const { author_name, author_image, photo, title, description, date_time } = singleNewsCard;
    return (
        <div className="card bg-base-100 shadow-xl cursor-pointer">
            <figure className="px-5 pt-5">
                <img src={photo} alt="photo" className="rounded-xl h-full w-full" />
            </figure>
            <div className="card-body">
                <h2 className="text-base font-poppins font-semibold">{title}</h2>
                <p className="">{description.slice(0, 100)}</p>
                <div className="w-full flex justify-between">
                    <div className="flex gap-2 justify-start items-center">
                        <img className="w-[45px] h-[45px] rounded-full" src={author_image} alt="author_image" />
                        <div>
                            <p className="text-base font-normal font-poppins">{author_name}</p>
                            <p className="font-roboto text-[12px]">{new Date(date_time).toLocaleDateString()}</p>
                        </div>
                    </div>
                    <button className="btn btn-primary">Read....</button>
                </div>
            </div>
        </div>
    );
};

SingleNews.propTypes = {
    singleNewsCard: PropTypes.object.isRequired
}

export default SingleNews;