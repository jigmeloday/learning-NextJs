import { useRouter } from 'next/router';
import ErrorAlert from '@/components/error-alert/error-alert';
import { Fragment } from 'react';
import EventSummary from '@/components/event-detail/event-summary';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventContent from '@/components/event-detail/event-content';
import { getAllEvents, getEventById } from '@/helper/api-utils';

export async function getStaticPaths(){
    const allEvent = await getAllEvents();
    return{
        paths: allEvent.map((event) =>  ({ params: {eventID: event.id } })),
        fallback: false
    }
}

export async function getStaticProps(context: any) {
    const{ params } = context
    const event = await getEventById(params.eventID);
    return{
        props:{
            event
        },
        revalidate: 30
    }
}

function EventDetail(props: any) {
    return !props.event ? <ErrorAlert /> : <Fragment>
        <EventSummary title={!props.event.title} />
        <EventLogistics address={props.event.location} date={props.event.date} image={props.event.image} imageAlt='img'  />
        <EventContent>
            <p>{props.event.description}</p>
        </EventContent>

    </Fragment>
}

export default EventDetail;