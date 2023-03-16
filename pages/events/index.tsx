import { getAllEvents } from '@/dummy-data';
import EventList from '@/components/events/event-list';

function Events() {
    const allEVents = getAllEvents();
    return(
        <div>
            <EventList items={allEVents} />
        </div>
    )
}

export default Events;