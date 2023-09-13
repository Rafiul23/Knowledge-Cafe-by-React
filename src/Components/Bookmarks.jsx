import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-100 m-4 p-4 rounded-lg">
            <h2 className="text-purple-600 font-bold text-3xl">Reading Time: {readingTime}</h2>
            <h2 className="text-3xl font-bold text-red-600">Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, i)=> <Bookmark key={i} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number 
}
export default Bookmarks;