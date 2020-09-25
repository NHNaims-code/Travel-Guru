import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import './SingleCard.css'
import img1 from '../../image/img1.png';
import { bookingContext } from '../../App';

const SingleCard = (props) => {
    const [currentResort, setCurrentResort] = useContext(bookingContext);
    const {img, name} = props.data;
    console.log(props.data);
    let border = '';
    if(currentResort.name === name){
        border = '5px solid goldenrod';
    }
    const borderStyle = {
        backgroundImage: `url(${img})`,
        border: border
    }
    const newData = {...props.data}
    newData.currentStyle = border
    return (
        <div onClick={()=>{setCurrentResort(newData)}}>
            <div style={borderStyle} className="card" >
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default SingleCard;