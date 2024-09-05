import api from "./index"

const register = (userData) => {
    return api.post("/register", userData)
}

const login = (credentials) => {
    return api.post("/login", credentials)
}

const logout = () => {
    return api.post("/logout")
}

const authenticateUser = () => {
    return api.get("/authenticate")
}

export { authenticateUser, login, logout, register }