import { useContext, useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '@/store/notification/notification-context';

function Comments(props: any) {
    const { eventId } = props;
    const [comments, setComments] = useState();
    const [showComments, setShowComments] = useState(false);
    const notification = useContext(NotificationContext);

    function toggleCommentsHandler() {
        setShowComments((prevStatus) => !prevStatus);
    }

    function addCommentHandler(commentData: any) {
       fetch(`/api/comments/${eventId}`, { method: 'POST', body: JSON.stringify(commentData) }).then((res) => {
           if ( res.ok ) {
               notification.showNotification({
                   message: 'Successfully Commented',
                   status: 'success',
                   title: 'Comment Sent'
               })
           } else{
               notification.showNotification({
                   message: 'Sorry try again tsk tsk',
                   status: 'error',
                   title: 'Failed'
               })
           }
       }).catch((err) => {
           notification.showNotification({
               message: 'Sorry try again tsk tsk',
               status: 'error',
               title: 'Failed'
           })
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
