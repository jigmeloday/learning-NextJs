import classes from './newsletter-registration.module.css';
import { useRef, useContext } from 'react';
import NotificationContext from '@/store/notification/notification-context';

function NewsletterRegistration() {

    const emailRef: any = useRef();
    const notification = useContext(NotificationContext);

    function registrationHandler(event: any) {
        notification.showNotification({
            message: 'Registration for news letter.',
            status: 'pending',
            title: 'Signing Up'
        })
        event.preventDefault();
        fetch('/api/news-letter', { method: 'POST', body: JSON.stringify( { email: emailRef.current.value })}).then(
            (res) =>{
                if ( res ) {
                    notification.showNotification({
                        message: 'Successfully Register',
                        status: 'success',
                        title: 'Success'
                    })
                }
            }
        ).catch((err) => {
            notification.showNotification({
                message: 'Sorry try again tsk tsk',
                status: 'error',
                title: 'Failed'
            })
        })

    }

    return (
        <section className={classes.newsletter}>
            <h2>Sign up to stay updated!</h2>
            <form onSubmit={registrationHandler}>
                <div className={classes.control}>
                    <input
                        type='email'
                        id='email'
                        ref={emailRef as any}
                        placeholder='Your email'
                        aria-label='Your email'
                    />
                    <button onClick={registrationHandler}>Register</button>
                </div>
            </form>
        </section>
    );
}

export default NewsletterRegistration;