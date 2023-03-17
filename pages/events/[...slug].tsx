import EventList from '@/components/events/event-list';
import ResultsTitle from '@/components/result/results-title';
import { Fragment } from 'react';
import Button from '@/components/ui/button';
import ErrorAlert from '@/components/error-alert/error-alert';
import { getSearchData } from '@/helper/api-utils';

export async function getServerSideProps(context: any){
    const { params } = context;
    const year =  params.slug && +params?.slug?.[0];
    const month =  params.slug && +params?.slug?.[1];
    const event = await getSearchData( year as number, month as number );
    if ( isNaN(year as any) || isNaN(month as any) || month && month > 12 ) {
        return {
            props: {
                invalid: true
            }
        }
    }
    return{
        props: { event, year, month  }
    }

}

function FilterEvent(props: any) {

   if ( props.invalid  ){
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

   const date = new Date( props.year as number,  props.month as number -1)
    return(
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={props.event}/>
        </Fragment>
    )
}

export default FilterEvent;