import { getProjects } from '../utils/projects'

import ProjectList from '@/components/linkScroller'

const projects = getProjects()

const Page = () => {
    return (
        <>
            <ProjectList Path={'/projects'} Items={projects} />
        </>
    )
}

export default Page;