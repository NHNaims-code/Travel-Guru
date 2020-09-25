import React, { useContext, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useHistory, useLocation } from 'react-router-dom';
import { bookingContext } from '../../App';
import './Booking.css';

const Booking = () => {
    const [currentResort, setCurrentResort,signedInUser, setSignedInUser, travelDate, setTravelDate] = useContext(bookingContext)
    const date = new Date();
    const [selectedFrom, setSelectedFrom] = useState(date)
    const [selectedTo, setSelectedTo] = useState(date)

    const history = useHistory();
    const handleSubmit = (event) => {

        history.push("/hotel");
        event.preventDefault();
    }

    const handleDatePicker = (selectedDate, fromOrTo) =>{
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var date = new Date(selectedDate);
        const toMonth = date.getMonth();
        const toMonthName = monthNames[toMonth];
        const toDate = date.getDate();

        if(fromOrTo === 'from'){
            const newTravelDate = {...travelDate};
            newTravelDate.from = toDate;
            newTravelDate.month = toMonthName;
            setTravelDate(newTravelDate) 
            console.log(travelDate);
        }
        if(fromOrTo === 'to'){
            const newTravelDate = {...travelDate};
            newTravelDate.to = toDate;
            newTravelDate.month = toMonthName;
            setTravelDate(newTravelDate) 
            console.log(travelDate);
        }
        

    }
    return (
            <div className="home  row container mx-auto d-flex align-items-center">
            <div className="col-md-6 text-left">
                <h1>{currentResort.name}</h1>
                <p>{currentResort.longDescription}</p>
            </div>
            <div className="col-md-6 d-flex d-flex">
            <Form className="text-left booking p-5 rounded shadow" onSubmit={handleSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className="text-secondary">Origin</Form.Label>
                    <Form.Control type="text" placeholder="name@example.com" value="Dhaka" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className="text-secondary">Destination</Form.Label>
                    <Form.Control type="text" placeholder="name@example.com" value={currentResort.name} disabled/>
                </Form.Group>
                <Row>
                    <Col>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="text-secondary">From</Form.Label>
                        <ReactDatePicker
                        selected={selectedFrom}
                        onChange={date => {
                            setSelectedFrom(date);
                            handleDatePicker(date, "from");
                            }
                        }
                        dateFormat='dd/MM'
                        >
                        </ReactDatePicker>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="text-secondary d-block">To</Form.Label>
                        <ReactDatePicker
                        selected={selectedTo}
                        onChange={(date) => {
                            setSelectedTo(date)
                            handleDatePicker(date, "to");
                        }}
                        dateFormat='dd/MM'
                        >
                            
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