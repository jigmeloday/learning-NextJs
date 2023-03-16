import { useRouter } from 'next/router';

function ClientProjects() {
    const route = useRouter();
    console.log(route.query)
    return(
        <>The Project of a Given CLient </>
    )
}

export default ClientProjects;