import { Fragment } from 'react';
import MainHeader from '@/components/layout/main-header';

function Layout(props: any) {
    return(
        <Fragment>
            <MainHeader />
           <main>
               {props.children}
           </main>
        </Fragment>
    )
}

export default Layout;