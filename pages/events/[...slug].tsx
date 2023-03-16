import { useRouter } from 'next/router';
import { getSearchData } from '@/dummy-data';

function FilterEvent() {
    const route = useRouter();
    const getFilterData = getSearchData(route.query.slug as any);
    console.log(getFilterData)
    return(
        <>Filter Events</>
    )
}

export default FilterEvent;