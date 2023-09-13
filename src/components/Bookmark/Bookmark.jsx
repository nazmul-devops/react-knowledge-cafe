import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {blog_title} = bookmark;
    return (
        <div>
            <div className="bg-white rounded-lg p-5">
                <h2>{blog_title}</h2>
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;