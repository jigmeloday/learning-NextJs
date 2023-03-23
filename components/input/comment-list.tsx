import classes from './comment-list.module.css';

function CommentList( props: any ) {
    return (
        <ul className={ classes.comments }>
            {
                props?.comments?.comments?.map( ( items: any ) =>
                    <li key={items._id}>
                        <p>{ items?.newComment?.text }</p>
                        <div>
                            By <address>{ items?.newComment?.name }</address>
                        </div>
                    </li>
                )
            }
        </ul>
    );
}

export default CommentList;