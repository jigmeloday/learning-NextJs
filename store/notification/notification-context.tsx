import { createContext, useState } from 'react';

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

    return (
        <NotificationContext.Provider value={context}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext;