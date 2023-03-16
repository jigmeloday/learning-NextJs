import { getAllEvents } from '@/dummy-data';
import EventList from '@/components/events/event-list';
import EventSearch from '@/components/events/event-search';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

function Events() {
    const allEVents = getAllEvents();
    const route = useRouter();
    const search = (year: any, month: any) => {
       route.push(`/events/${year}/${month}`)
    }
    return(
        <Fragment>
            <EventSearch onSearch={search}  />
            <EventList items={allEVents} />
        </Fragment>
    )
}

export default Events;