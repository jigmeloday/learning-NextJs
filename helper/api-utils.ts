export const getFeature = async () => {
    const events =  await getAllEvents();
    return events.filter((event: any) => event.isFeatured);
}
//
export const getEventById = async ( id: string ) => {

};

export const getAllEvents = async () =>{
   const resp = await fetch('https://events-1d0d8-default-rtdb.firebaseio.com/events.json');
   const data = await resp.json();
   const events = [];
   for ( const key in data ) {
       events.push( {
           id: key,
           ...data[key]
       });
   }
   return events;
}

// export async const getSearchData = ( year: number, month: number ) => DUMMY_EVENTS.filter( ( event ) => {
//     const date = new Date( event.date );
//     return date.getFullYear() === year && date.getUTCMonth() === month - 1 && event
// } );