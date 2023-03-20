function handler(req: any, res: any) {
    const eventID =  req.query.eventID;

    if ( req.method === 'POST' ) {
        console.log(eventID)
        res.status(201)
    }

    if ( req.method === 'GET' ) {
        console.log('hello')
        res.status(200).json({ message: 'success' })
    }
}

export default handler;