import { useRouter } from 'next/router';
import { getEventById } from '@/dummy-data';

function EventDetail() {
    const route = useRouter();
    const eventDetail = getEventById(route.query.eventID as string);
    return(
        <>
            event detail
        </>
    )
}

export default EventDetail;