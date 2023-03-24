import { Fragment, useContext } from 'react';
import MainHeader from '@/components/layout/main-header';
import Notification from '@/components/ui/notification';
import NotificationContext from '@/store/notification/notification-context';

function Layout(props: any) {
    const notification = useContext<any>(NotificationContext);
    const activeNotification = notification.notification;
    return(
        <Fragment>
            <MainHeader />
           <main>
               {props.children}
           </main>
            {
               activeNotification && <Notification title={activeNotification?.title}
                                                   message={activeNotification.message}
                                                   status={activeNotification.status}  />
            }
        </Fragment>
    )
}

export default Layout;