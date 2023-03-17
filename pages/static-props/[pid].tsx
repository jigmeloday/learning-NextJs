import { Fragment } from 'react';
import path from 'path';
import fs from 'fs/promises';


async function getData() {
    const filePath =  path.join(process.cwd(), 'data', 'dummy-backend.json')
    const jsonData = await fs.readFile(filePath);
   return JSON.parse(jsonData as any)
}

export async function getStaticPaths(){
    const data = await getData();
    return {
        paths: data.products.map((product: any) => ({params: { pid: product.id }}) ),
        fallback: false
    }

}

export async function getStaticProps(context: any){
    const productId = context.params.pid;
    const data = await getData();
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