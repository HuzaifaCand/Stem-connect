import api from "./index"

const getResources = () => {
    return api.get("/resources")
}

const createResource = (resourceData) => {
    return api.post("/add-resource", resourceData)
}

export { getResources, createResource }