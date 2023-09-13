import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark, handleReadingTime}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="w-2/3">
            <h1 className="text-4xl font-bold text-blue-600 ">Blogs: {blogs.length}</h1>
            {
                blogs.map((blog)=> <Blog 
                key={blog.id} 
                blog={blog}
                handleReadingTime={handleReadingTime}
                handleAddToBookmark={handleAddToBookmark}>
                </Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark : PropTypes.func,
    handleReadingTime : PropTypes.func 
}

export default Blogs;