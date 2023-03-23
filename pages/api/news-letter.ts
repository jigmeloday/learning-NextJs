import { connectionDatabase, insertDocument } from '@/helper/db-utils';

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
            res.status(500).json({ message: 'connection issue' })
        }
        try {
            await insertDocument(client, 'news-letter' ,'emails', email)
            res.status(201).json({ message: 'successful' });

        }catch ( err ){
            res.status(500).json( { message: 'tsk tsk failed' })
        }
        return
    }
    res.status(301).json({ message: 'successful' })
}



export default handler;