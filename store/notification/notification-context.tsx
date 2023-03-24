import { createContext, useEffect, useState } from 'react';

const NotificationContext = createContext( {
    notification: null,
    showNotification: function (notificationData: any) {
    },
    hideNotification: function () {
    },
} );

export function NotificationContextProvider(props: any) {
    const [active, setActive] = useState<any>(undefined);
    const showNotificationHandler = (notificationData: any) => {
        setActive(notificationData)
    }
    const hideNotificationHandler = () => {
        setActive(null)
    }

    const context = {
        notification: active,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler
    }

    useEffect(() => {
        if ( active && active?.notification?.status !== 'pending' ) {
            const timer = setTimeout(() => {
                hideNotificationHandler()
            }, 3000);
            return () => {
                clearTimeout(timer)
            }
        }
    }, [active])

    return (
        <NotificationContext.Provider value={context}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext;