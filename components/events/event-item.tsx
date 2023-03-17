import { DummyData } from '@/dummy-data';
import Link from 'next/link';
import classes from './event-item.module.css';
import Button from '@/components/ui/button';
import DateIcon from '@/components/icon/date-icon';
import AddressIcon from '@/components/icon/address-icon';
import ArrowRightIcon from '@/components/icon/arrow-right-icon';

function EventItem(props: {items: any }) {
    const { id, location, title, image, isFeatured, date } = props?.items;
    const eventDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    return(
        <li className={classes.item}>
            <img src={`/${image}`} alt='img'/>
            <div className={classes.content}>
                <div>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                       <time>{eventDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{location?.replace(', ', '\n')}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={`/events/${id}`}>
                       <span>
                            Explore Event
                       </span>
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem;