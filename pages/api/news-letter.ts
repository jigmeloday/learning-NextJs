import { MongoClient, ServerApiVersion } from 'mongodb'
const client = new MongoClient('mongodb+srv://jl:L7yxlNsDb5ORtu1M@cluster0.yakvrgz.mongodb.net/?retryWrites=true&w=majority');

async function handler( req: any, res: any,  ){
    if ( req.method === 'POST' ) {
        const { email } = JSON.parse(req.body);
        if ( !email  ) {
            res.status(401).json({ message: 'no email tsk tsk' })
            return
        }
        const db = client.db('news-letter');
        await db.collection('emails').insertOne({ email })
        res.status(201).json({ message: 'successful' });
        return
    }
    res.status(301).json({ message: 'successful' })
}



export default handler;