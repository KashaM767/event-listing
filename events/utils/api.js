import axios from "axios";

const eventsApi = axios.create({
    baseURL: "http://localhost:8081/api",
});

export const allEvents = () => {
    return eventsApi.get(`/events`)
        .then(({ data }) => {
            return data
        })
}

export const login = (obj) => {
    return eventsApi.post('/auth/login', obj)
        .then(({ data }) => {
            return data
        })
}


export const signup = (obj) => {
    return eventsApi.post('/auth/signup', obj)
        .then(({ data }) => {
            return data
        })
}