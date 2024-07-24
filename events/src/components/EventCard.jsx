import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

export default function EventCard(props) {
    const { title, description, time, date } = props.event

    return (
        <Card border="info" style={{ width: '21rem' }} className='row justify-content-md-center text-center mt-2'>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text id="event-description">
                    {description}
                </Card.Text>
                <Card.Text>{date}   {time}</Card.Text>
                <Button variant="info" type="submit">Register</Button>
            </Card.Body>
        </Card>
    )
};

