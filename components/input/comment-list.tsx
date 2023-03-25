import classes from './comment-list.module.css';

function CommentList( props: any ) {

    return (
        <ul className={ classes.comments }>
            {
                props?.comments?.comments?.map( ( items: any ) =>
                    <li key={items._id}>
                        <p>{ items?.document?.text }</p>
                        <div>
                            By <address>{ items?.document?.name }</address>
                        </div>
                    </li>
                )
            }
        </ul>
    );
}

export default CommentList;