import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="w-1/3">
            <div className="bg-[#6047ec1a] rounded-lg my-8">
                <h2 className="text-[#6047EC] text-2xl font-bold text-center py-5">Spent time on read : {readingTime} min</h2>
            </div>
            <div className="bg-[#1111110d] rounded-lg p-8 space-y-4">
                <h3 className="text-2xl font-bold mb-4">Bookmarked Blog: {bookmarks.length}</h3>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }

            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;