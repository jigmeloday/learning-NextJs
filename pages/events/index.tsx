import { getAllEvents } from '@/dummy-data';
import EventList from '@/components/events/event-list';

function Events() {
    const allEVents = getAllEvents();
    console.log(allEVents)
    return(
        <div>
            <EventList items={allEVents} />
        </div>
    )
}

export default Events;