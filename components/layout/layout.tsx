import { Fragment } from 'react';

function Layout(props: any) {
    return(
        <Fragment>
            {props.children}
        </Fragment>
    )
}

export default Layout;