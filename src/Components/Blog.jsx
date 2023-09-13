import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleReadingTime}) => {
    const {title, author, author_img, reading_time, posted_date, hashtag, cover_photo} = blog;
    return (
        <div className='p-4 space-y-4'>
            <img src={cover_photo} />
            <div className='flex justify-between p-4'>
                <div className='flex '>
                   <img className='w-14' src={author_img} alt="" /> 
                   <div className='ml-6'>
                      <h3 className='text-2xl'>{author}</h3>
                      <p>{posted_date}</p>
                   </div>
                </div>
                <div>
                   <span>{reading_time} min read</span> 
                   <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-lg mt-1 text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold text-violet-600">{title}</h2>
            <p><a href="#">{hashtag}</a></p>
            <button className='text-purple-800 font-bold underline' onClick={()=> handleReadingTime(blog.reading_time)}>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
} 

export default Blog;