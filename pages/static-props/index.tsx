import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

export async function getStaticProps() {
    const filePath =  path.join(process.cwd(), 'data', 'dummy-backend.json')
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData as any)
    return {
        props: data,
        revalidate: 1,
        notFound: !data,
        // redirect: {
        //     destination: '/'
        // }
    }
}

function StaticProps(props: any) {
    return(
        <ul>
            {
                props.products.map((product: { id: string, title: string }) =>  <li key={product.id}><Link href={`/static-props/${product.id}`}>
                    {product.title}
                </Link></li>)
            }
        </ul>
    )
}

export default StaticProps;