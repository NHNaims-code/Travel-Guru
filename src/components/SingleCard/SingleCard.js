import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './SingleCard.css'
import img1 from '../../image/img1.png';

const SingleCard = (props) => {
    const setCurrentResort = props.setCurrentResort;
    const {img, name} = props.data;
    return (
        <div onClick={()=>{setCurrentResort(props.data)}}>
            <div className="card" style={{backgroundImage: `url(${img})`}}>
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default SingleCard;