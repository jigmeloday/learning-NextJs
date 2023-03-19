import classes from './newsletter-registration.module.css';
import { useRef } from 'react';

function NewsletterRegistration() {

    const emailRef: any = useRef();

    function registrationHandler(event: any) {
        event.preventDefault();
        fetch('/api/news-letter', { method: 'POST', body: JSON.stringify(emailRef.current.value)}).then((res) => res)
        // fetch user input (state or refs)
        // optional: validate input
        // send valid data to API
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