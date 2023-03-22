import { MongoClient } from 'mongodb'
const client = new MongoClient('mongodb+srv://jigmelodey:Psycho0209@cluster0.v5jrt.mongodb.net/?retryWrites=true&w=majority');

async function handler(req: any, res: any) {
    const eventID =  req.query.eventID;
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
        const db = client.db('event-comments');
        await db.collection('comments').insertOne( { newComment });
        await client.close();
        res.status(201).json({ message: 'success' })
        return
    }

    if ( req.method === 'GET' ) {
        const dummy = [
            { id:'c1', name: 'Max', text: 'Test' },
            { id:'c2', name: 'Max', text: 'Test2' }
        ]
        const db = client.db('event-comments');
        const comments =  await db.collection('comments').find().sort({_id: -1 }).toArray();
        res.status(200).json({ comments: comments });
        return
    }
}

export default handler;