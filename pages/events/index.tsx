import EventList from '@/components/events/event-list';
import EventSearch from '@/components/events/event-search';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getAllEvents } from '@/helper/api-utils';

export async function getStaticProps() {
    const events = await getAllEvents();
    return{
        props: {
            events
        },
        revalidate: 60
    }
}

function Events(props: any) {
    const route = useRouter();
    const search = (year: any, month: any) => {
       route.push(`/events/${year}/${month}`)
    }
    return(
        <Fragment>
            <EventSearch onSearch={search}  />
            <EventList items={props.events} />
        </Fragment>
    )
}

export default Events;