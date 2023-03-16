import { useRouter } from 'next/router';
import { getEventById } from '@/dummy-data';
import ErrorAlert from '@/components/error-alert/error-alert';

function EventDetail() {
    const route = useRouter();
    const eventDetail = getEventById(route.query.eventID as string);
    return !eventDetail ? <ErrorAlert /> : <>
        event detail
    </>

}

export default EventDetail;