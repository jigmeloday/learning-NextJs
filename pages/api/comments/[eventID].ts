import { connectionDatabase, getAllDocument, insertDocument } from '@/helper/db-utils';

async function handler(req: any, res: any) {
    let client;
    const eventID =  req.query.eventID;
    try{
        client = await connectionDatabase();
    } catch ( err ){
        res.status(500).json(err )
    }
    if ( req.method === 'POST' ) {
        const data = JSON.parse(req.body);
        if ( !data ){
            res.status(401).json({ message: 'bad request tsk tsk' })
            return
        }
        const newComment = {
            email: data.email,
            name: data.name,
            text: data.text,
            eventID
        }

        try{
            await insertDocument(client, 'event-comments', 'comments', newComment);
            await client?.close();
            res.status(201).json({ message: 'success' })
        } catch ( e ) {
            res.status(500).json({ message: 'error on' })
        }
        return
    }

    if ( req.method === 'GET' ) {
        try{
            const comments  = await getAllDocument(client, 'event-comments', 'comments');
            res.status(200).json({ comments });
        } catch ( e ) {
            res.status(500).json(e )
        }
        return
    }
}

export default handler;