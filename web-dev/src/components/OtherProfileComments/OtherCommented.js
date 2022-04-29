import OtherCommentListItem from "./OtherCommentListItem.js";


const OtherCommented = ({ commentList }) => {
    return (
        <>
            {
                commentList.map((comment, index) => { return (OtherCommentListItem(comment, index)); })
            }
        </>
    );
}

export default OtherCommented;

