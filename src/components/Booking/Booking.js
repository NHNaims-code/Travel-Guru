import React, { useContext, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useHistory, useLocation } from 'react-router-dom';
import { bookingContext } from '../../App';

const Booking = () => {
    const [currentResort, setCurrentResort] = useContext(bookingContext)
    const date = new Date();
    const [selectedFrom, setSelectedFrom] = useState(date)
    const [selectedTo, setSelectedTo] = useState(date)

    const history = useHistory();
    const handleSubmit = (event) => {

        history.push("/hotel");
        event.preventDefault();
    }
    return (
            <div className="home booking row container mx-auto d-flex align-items-center">
            <div className="col-md-6 text-left">
                <h1>{currentResort.name}</h1>
                <p>{currentResort.longDescription}</p>
            </div>
            <div className="col-md-6 d-flex d-flex">
            <Form className="text-left bg-white p-5 rounded shadow" onSubmit={handleSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className="text-secondary">Origin</Form.Label>
                    <Form.Control type="text" placeholder="name@example.com" value="Dhaka" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className="text-secondary">Destination</Form.Label>
                    <Form.Control type="text" placeholder="name@example.com" value={currentResort.name} />
                </Form.Group>
                <Row>
                    <Col>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="text-secondary">From</Form.Label>
                        <ReactDatePicker
                        selected={selectedFrom}
                        onChange={date => setSelectedFrom(date)}
                        dateFormat='dd/MM'
                        >
                        </ReactDatePicker>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="text-secondary">From</Form.Label>
                        <ReactDatePicker
                        selected={selectedTo}
                        onChange={date => setSelectedTo(date)}
                        dateFormat='dd/MM'
                        >
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                        </ReactDatePicker>
                    </Form.Group>
                    </Col>
                </Row>
                <button className="btn btn-warning w-100">Start Booking</button>
                </Form>
            </div>
            </div>
    );
};

export default Booking;