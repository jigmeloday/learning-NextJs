import { useRouter } from 'next/router';
import { getSearchData } from '@/dummy-data';

function FilterEvent() {
    const route = useRouter();
    const year =  route.query.slug && +route.query?.slug?.[0];
    const month =  route.query.slug && +route?.query?.slug?.[1];

   if ( isNaN(year as any) || isNaN(month as any) || month && month > 12  ){
       return <>hello dick head</>
   }
    const getFilterData = getSearchData(year as number, month as number);
   console.log(getFilterData)
    return(
        <>Filter Events</>
    )
}

export default FilterEvent;