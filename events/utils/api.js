import axios from "axios";

const eventsApi = axios.create({
    baseURL: "http://localhost:8081/api/",
});

export const allEvents = () => {
    return eventsApi.get(`/events`)
        .then(({ data }) => {
            return data
        })
}