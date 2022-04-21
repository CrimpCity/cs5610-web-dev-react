import CommentListItem from "./CommentListItem.js";
import Comments from "../data/comments.json";


const Commented = () => {
    return (
        <>
            {
                Comments.map((comment, index) => { return (CommentListItem(comment, index)); })
            }
        </>
    );
}

export default Commented;

