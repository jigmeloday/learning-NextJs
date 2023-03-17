import { DummyData } from '@/dummy-data';
import EventItem from '@/components/events/event-item';
import classes from './event-list.module.css';

function EventList(props: any){
    return(
        <ul className={classes.list}>
            {
                props.items?.map((item: any) => (
                   <EventItem items={item} key={item.id} />
                ))
            }
        </ul>
    )
}

export default EventList;