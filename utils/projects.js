import fs from 'fs'
import path from 'path'

const projectDir = path.join(process.cwd(), 'app', 'projects')

const formatName = (name) => {
    const strArr = name.split('-')
    const cappedArr = strArr.map((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    })

    return cappedArr.join(' ')
}

export const getProject = async (id) => {
    const { default: component } = await import(`${projectDir}/${id}`)
    const name = formatName(id)

    return {
        id,
        name,
        component,
    }
}

export const getProjects = () => {
    const projectPaths = fs.readdirSync(projectDir)
    const projectArr = projectPaths
        .filter((projectId) => !projectId.includes('.'))
        .map(projectId => {
            const name = formatName(projectId)
            return {
                id: projectId,
                name,
            }
        })

    return projectArr
}

export const getProjectPaths = () => {
    const projectPaths = fs.readdirSync(projectDir)
    const projectArr = projectPaths.map(project => {
        return {
            id: project
        }
    })

    return projectArr
}