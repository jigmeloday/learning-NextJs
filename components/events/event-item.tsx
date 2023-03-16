import { DummyData } from '@/dummy-data';
import Link from 'next/link';
import classes from './event-item.module.css';

function EventItem(props: {items: DummyData }) {
    const { id, description, location, title, image, isFeatured, date } = props?.items;
    const eventDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    return(
        <li className={classes.item}>
            <img src={image} alt='img'/>
            <div className={classes.content}>
                <div>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                       <time>{eventDate}</time>
                    </div>
                    <div className={classes.address}>
                        <address>{location.replace(', ', '\n')}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Link href={`/events/${id}`} > Explore Event </Link>
                </div>
            </div>
        </li>
    )
}

export default EventItem;