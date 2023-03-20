function handler(req: any, res: any) {
    const eventID =  req.query.eventID;

    if ( req.method === 'POST' ) {
        console.log(eventID)
        res.status(201)
    }

    if ( req.method === 'GET' ) {
        const dummy = [
            { id:'c1', name: 'Max', text: 'Test' },
            { id:'c2', name: 'Max', text: 'Test2' }
        ]
        res.status(200).json({ comments: dummy });
    }
}

export default handler;