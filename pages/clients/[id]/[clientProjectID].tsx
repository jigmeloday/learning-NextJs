import { useRouter } from 'next/router'
function SelectedClientProject() {
    const route = useRouter();
    console.log(route.query.id)
    return(
        <>Project for a spicific project client</>
    )
}

export default SelectedClientProject;