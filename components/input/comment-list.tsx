import classes from './comment-list.module.css';

function CommentList( props: any ) {
    return (
        <ul className={ classes.comments }>
            {/* Render list of comments - fetched from API */ }
            {
                props?.comments?.comments.map( ( items: any ) =>
                    <li key={items.id}>
                        <p>{ items.text }</p>
                        <div>
                            By <address>items.name</address>
                        </div>
                    </li>
                )
            }
        </ul>
    );
}

export default CommentList;