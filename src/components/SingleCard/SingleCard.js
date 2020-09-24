import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import './SingleCard.css'
import img1 from '../../image/img1.png';
import { bookingContext } from '../../App';

const SingleCard = (props) => {
    const [currentResort, setCurrentResort] = useContext(bookingContext);
    const {img, name} = props.data;
    console.log(props.data);
    return (
        <div onClick={()=>{setCurrentResort(props.data)}}>
            <div className="card" style={{backgroundImage: `url(${img})`}}>
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default SingleCard;