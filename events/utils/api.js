import axios from "axios";

const eventsApi = axios.create({
    baseURL: "http://localhost:8081/api",
});

export const allEvents = async () => {
    const { data } = await eventsApi.get(`/events`);
    return data;
}

export const login = async (obj) => {
    const { data } = await eventsApi.post('/auth/login', obj);
    if (data.token) {
        localStorage.setItem("user", JSON.stringify(data))
    }
    return data;
}

export const signup = async (obj) => {
    const { data } = await eventsApi.post('/auth/signup', obj);
    if (data.token) {
        localStorage.setItem("user", JSON.stringify(data))
    }
    return data;
}

export const addEvent = async (obj) => {
    const { data } = await eventsApi.post('/users/:id/events', obj);
    return data;
}

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"))
}