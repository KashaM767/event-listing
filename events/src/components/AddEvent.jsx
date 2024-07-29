import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { addEvent } from '../../utils/api';

const AddEvent = () => {
    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTiem, setEventTime] = useState('');

    return (
        <div className='row justify-content-md-center text-center'>
            <div className='col-md-5'>
                <h1 className='mb-4'>Add Event</h1>
                <Form noValidate onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group controlId="formBasicTitle">
                        <Form.Label>Event Name</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                required
                                type="text"
                                name="eventName"
                                onChange={(e) => setEventName(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a name
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                as="textarea"
                                required
                                type="text"
                                name="eventDescription"
                                onChange={(e) => setEventDescription(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a description
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="col-md-5" controlId="formBasicDate">
                        <Form.Label>Date</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                required
                                type="date"
                                name="eventDate"
                                onChange={(e) => setEventDate(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a date
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="col-md-5" controlId="formBasicTime">
                        <Form.Label>Time</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                required
                                type="time"
                                name="eventTime"
                                onChange={(e) => setEventTime(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a time
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="formBasicButton">
                        <Button className='col-md-3 mt-2' variant="info" type="submit">
                            submit
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}

export default AddEvent;