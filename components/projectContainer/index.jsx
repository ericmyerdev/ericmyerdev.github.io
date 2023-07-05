import { getProject } from "@/utils/projects";

import Modal from '@/components/modal'

const projectContainer = async ({ id }) => {
    const { component: Project } = await getProject(id)

    return (
        <Modal>
            <Project />
        </Modal>
    )
}

export default projectContainer;