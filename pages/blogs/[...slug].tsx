import { useRouter } from 'next/router';

function Blog(){
    const route = useRouter();
    console.log(route.query)
    return(<>Blog</>)
}

export default Blog;