import api from "./index"

const createProject = (projectData) => {
    return api.post("/create-project", projectData)
}

const getProjects = () => {
    return api.get("/projects")
}

const getProject = (projectId) => {
    return api.get(`/projects/${projectId}`)
}

const getRecentProjects = () => {
    return api.get("/recent-projects")
}

const verifyCreator  = (project_id) => {
    return api.get(`/projects/${project_id}/verify-creator`)
}

const updateProject = (projectId, updated_data) => {
    return api.put(`/update/${projectId}`, updated_data)
}

const deleteProject = (projectId) => {
    return api.delete(`/delete/${projectId}`)
}

const addInterest = (projectId) => {
    return api.post(`/add-interest/${projectId}`)
}

export { createProject, deleteProject, updateProject, verifyCreator , getProjects, getProject, addInterest, getRecentProjects }