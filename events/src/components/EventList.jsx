import * as React from 'react';
import { useState, useEffect } from "react";
import { allEvents } from '../../utils/api';
import EventCard from './EventCard';

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        allEvents().then((eventsArray) => {
            setEvents(eventsArray)
            setIsLoading(false)
        })
            .catch((err) => {
                console.log(err)
                setIsError(true)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Something went wrong</p>

    return (
        <ul>
            {events.map((event) => {
                return <EventCard event={event} key={event._id} />
            })}
        </ul>
    );
}

export default EventList;