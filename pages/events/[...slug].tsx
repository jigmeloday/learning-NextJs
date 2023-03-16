import { useRouter } from 'next/router';
import { getSearchData } from '@/dummy-data';
import EventList from '@/components/events/event-list';
import ResultsTitle from '@/components/result/results-title';
import { Fragment } from 'react';
import Button from '@/components/ui/button';
import ErrorAlert from '@/components/error-alert/error-alert';

function FilterEvent() {
    const route = useRouter();
    const year =  route.query.slug && +route.query?.slug?.[0];
    const month =  route.query.slug && +route?.query?.slug?.[1];

   if ( isNaN(year as any) || isNaN(month as any) || month && month > 12  ){
       return <Fragment>
         <ErrorAlert>
             <p>
                 No Search Found
             </p>
         </ErrorAlert>
           <div className='center'>
               <Button link='/events'>
                   Go Back
               </Button>
           </div>
       </Fragment>
   }
    const getFilterData = getSearchData(year as number, month as number);
   const date = new Date( year as number,  month as number -1)
    return(
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={getFilterData}/>
        </Fragment>
    )
}

export default FilterEvent;