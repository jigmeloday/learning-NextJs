import { useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props: any) {
    const { eventId } = props;
    const [comments, setComments] = useState();
    const [showComments, setShowComments] = useState(false);

    function toggleCommentsHandler() {
        setShowComments((prevStatus) => !prevStatus);
    }

    function addCommentHandler(commentData: any) {
       fetch(`/api/comments/${eventId}`, { method: 'POST', body: JSON.stringify(commentData) }).then(() => {

       })
    }
    useEffect(() => {
        fetch(`/api/comments/${eventId}`, { method: 'GET' }).then((data) => data.json()).then((resp) =>{
            setComments(resp)
        })
    }, [])
    return (
        <section className={classes.comments}>
            <button onClick={toggleCommentsHandler}>
                {showComments ? 'Hide' : 'Show'} Comments
            </button>
            {showComments && <NewComment onAddComment={addCommentHandler} />}
            {showComments && <CommentList comments={comments}  />}
        </section>
    );
}

export default Comments;
