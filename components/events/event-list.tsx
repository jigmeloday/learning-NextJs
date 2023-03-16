import { DummyData } from '@/dummy-data';
import EventItem from '@/components/events/event-item';
import classes from './event-list.module.css';

function EventList(props: { items: DummyData[] }){
    return(
        <ul className={classes.list}>
            {
                props.items.map((items) => (
                   <EventItem items={items} key={items.id} />
                ))
            }
        </ul>
    )
}

export default EventList;