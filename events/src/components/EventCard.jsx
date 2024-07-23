import * as React from 'react';


export default function EventCard(props) {
    const { event } = props

    return (
        <li>{event.title}</li>
    )
};

