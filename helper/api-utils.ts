export const getFeature = async () => {
    const events =  await getAllEvents();
    return events.filter((event: any) => event.isFeatured);
}

export const getEventById = async ( id: string ) => {
    const eventById = await getAllEvents();
    return eventById.find((event) => event.id === id)
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



export  const getSearchData = async ( year: number, month: number ) => {
    const data = await getAllEvents();
   return data.filter( ( event ) => {
        const date = new Date( event.date );
        return date.getFullYear() === year && date.getUTCMonth() === month - 1 && event
    } )};