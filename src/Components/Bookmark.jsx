import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className=' bg-slate-200 mt-4 p-4 rounded-lg'>
            <h2 className="text-xl font-bold text-green-600">{title}</h2>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object 
}

export default Bookmark;