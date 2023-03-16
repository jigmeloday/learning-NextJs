import { useRouter } from 'next/router';
import { getEventById } from '@/dummy-data';
import ErrorAlert from '@/components/error-alert/error-alert';
import { Fragment } from 'react';
import EventSummary from '@/components/event-detail/event-summary';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventContent from '@/components/event-detail/event-content';

function EventDetail() {
    const route = useRouter();
    const eventDetail = getEventById(route.query.eventID as string);
    return !eventDetail ? <ErrorAlert /> : <Fragment>
        <EventSummary title={eventDetail.title} />
        <EventLogistics address={eventDetail.location} date={eventDetail.date} image={eventDetail.image} imageAlt='img'  />
        <EventContent>
            <p>{eventDetail.description}</p>
        </EventContent>

    </Fragment>
}

export default EventDetail;