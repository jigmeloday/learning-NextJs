import { MongoClient } from 'mongodb'

async function connectionDatabase() {
    return new MongoClient( 'mongodb+srv://jigmelodey:Psycho0209@cluster0.v5jrt.mongodb.net/?retryWrites=true&w=majority' )
}

async function insertDocument(client: any, document: any) {
    const { email } = document;
    const db = client.db('news-letter');
    await db.collection('emails').insertOne( { email })
}

async function handler( req: any, res: any,  ){
    if ( req.method === 'POST' ) {
        const { email } = JSON.parse(req.body);
        if ( !email  ) {
            res.status(401).json({ message: 'no email tsk tsk' })
            return
        }
        let client;
        try {
             client = await connectionDatabase();

        } catch ( err ){
            res.status(500)
        }
        try {
            await insertDocument(client, email)
            res.status(201).json({ message: 'successful' });

        }catch ( err ){
            res.status(500).json( { message: 'tsk tsk failed' })
        }
        return
    }
    res.status(301).json({ message: 'successful' })
}



export default handler;