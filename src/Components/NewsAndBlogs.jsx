import { useEffect, useState } from "react";
import SingleNews from "./SingleNews";
import plane from "../assets/picture/blog-plane.webp"
import star from '../assets/icons/star.webp'


const NewsAndBlogs = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        fetch('blog_news.json')
            .then(res => res.json())
            .then(data => setNewsData(data))
    }, []);
    console.log(newsData);

    return (
        <div className="relative">
            <img className="absolute right-0 -top-40 -z-20 hidden lg:flex" src={plane} alt="" />
            <div className="News_Container flex flex-col items-center justify-center md:min-h-svh">

                {/* Title & description */}
                <div className='News_content_container text-center'>
                    <div className="flex gap-2 items-center justify-center">
                        <img src={star} alt="star" />
                    <h3 className='text-2xl font-roboto'>News & Blog</h3>
                    </div>
                    <h1 className='text-5xl font-poppins'>Letest News & Articles</h1>
                    <p className='text-base md:text-xl text-black text-opacity-55 font-roboto mt-2 max-w-[660px] md:max-w-3xl mx-auto'>Stay informed with our latest news and articles, delivering up-to-the-minute updates and insightful content to keep you ahead in the world of travel and exploration.</p>
                </div>
                {/* single News Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:mt-10 lg:mt-20">
                    {
                        newsData.map(singleNewsCard => <SingleNews
                            key={singleNewsCard._id}
                            singleNewsCard={singleNewsCard}
                        ></SingleNews>)
                    }
                </div>
                <div className="flex gap-2 mt-10 text-xl">
                    <p>Want to see our Recent News & Updates.</p>
                    <a href="#" className="underline text-red-400">Click here to View More...</a>
                </div>
            </div>
        </div>
    );
};

export default NewsAndBlogs;