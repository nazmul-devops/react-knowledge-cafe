import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {id, blog_cover_image, blog_title, 
        author_image, author_name, published_date,
        time_to_read, hashtag
        } = blog;
    return (
        <div className='space-y-4 my-8'>
            <img className='rounded-lg w-full' src={blog_cover_image} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex w-8/12 items-center space-x-4'>
                    <img src={author_image} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold'>{author_name}</h2>
                        <p className='text-gray-500 text-base font-semibold'>{published_date}</p>
                    </div>
                </div>
                <div className='flex space-x-2 text-gray-500 text-base font-semibold'>
                    <p className=''>{time_to_read} min read</p>
                <button onClick={() => handleAddToBookmark(blog)} ><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-xl md:text-4xl font-bold">{blog_title}</h2>
            <p className='space-x-4 pb-2'>
                {
                    hashtag.map((hash, idx) => <span key={idx} className='text-xl text-gray-500'><a href='#'>{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, time_to_read)} className='underline text-purple-600' href="#">Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;