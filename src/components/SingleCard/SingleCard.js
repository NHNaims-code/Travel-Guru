import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './SingleCard.css'
import rectangle1 from '../../image/rectangle1.png';

const SingleCard = () => {
    const bg = 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    return (
        <div>

            <div className="card" style={{backgroundImage: `url(${rectangle1})`}}>
                <h2>Cox's Buzar</h2>
            </div>
        </div>
    );
};

export default SingleCard;