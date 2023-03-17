import { Fragment } from 'react';
import path from 'path';
import fs from 'fs/promises';


export async function getStaticPaths(){
    return {
        paths: [
            {
                params: { pid: 'p1' },
            },{
                params: { pid: 'p2' },
            },{
                params: { pid: 'p3' }
            }
        ],
        fallback: false
    }

}

export async function getStaticProps(context: any){
    const productId = context.params.pid;
    const filePath =  path.join(process.cwd(), 'data', 'dummy-backend.json')
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData as any)
    return {
        props: data.products.find((item: any) => item.id === productId)
    }
}

function ProductDetail(props: any) {
    return(
        <Fragment>
            <h1>{ props.title }</h1>
            <p> {props.description} </p>
        </Fragment>
    )
}

export default ProductDetail