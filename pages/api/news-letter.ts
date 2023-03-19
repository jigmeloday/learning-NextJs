function handler( req: any, res: any,  ){
    if ( req.method === 'POST' ) {
        post({email: req.body, res})
    }
}

function post( data: { email: string, res: any } ) {
    const { email, res } = data;
    if ( !email || !email.includes('@') ) {
        console.log('hello')
    }
    res.status(201).json({ message: 'successful' })
}
export default handler;