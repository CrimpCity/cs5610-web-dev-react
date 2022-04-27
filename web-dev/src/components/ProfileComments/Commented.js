import CommentListItem from "./CommentListItem.js";


const Commented = ({ commentList }) => {
    return (
        <>
            {
                commentList.map((comment, index) => { return (CommentListItem(comment, index)); })
            }
        </>
    );
}

export default Commented;

