import { MongoClient } from 'mongodb'
const client = new MongoClient('mongodb+srv://jigmelodey:Psycho0209@cluster0.v5jrt.mongodb.net/?retryWrites=true&w=majority');

async function handler( req: any, res: any,  ){
    if ( req.method === 'POST' ) {
        const { email } = JSON.parse(req.body);
        if ( !email  ) {
            res.status(401).json({ message: 'no email tsk tsk' })
            return
        }
        client.connect().then((err) => console.log(err)).catch((err) => console.log('error', err))
        const db = client.db('news-letter');
        await db.collection('emails').insertOne({ email })
        res.status(201).json({ message: 'successful' });
        return
    }
    res.status(301).json({ message: 'successful' })
}



export default handler;