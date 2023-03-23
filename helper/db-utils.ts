import { MongoClient } from 'mongodb';

export async function connectionDatabase() {
    return new MongoClient( 'mongodb+srv://jigmelodey:Psycho0209@cluster0.v5jrt.mongodb.net/?retryWrites=true&w=majority' )
}

export async function insertDocument(client: any, dbName: String , collection: any, document?: any) {
    const db = client.db(dbName);
    return await db.collection(collection).insertOne( { document })
}

export async function getAllDocument(client: any, dbName: String , collection: any, document?: any) {
    const db = client.db(dbName);
    return await db.collection(collection).find().toArray();
}