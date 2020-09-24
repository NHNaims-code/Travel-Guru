import React from 'react';
import './SingleHotel.css'
import star from '../../Icon/star_1_.png'

const SingleHotel = (props) => {
    const {title, guests, bedrooms, beds, baths, extra, rating, review, price, status, img} = props.data;
    return (
        <div className="d-flex row align-content-center justify-content-center single-hotel">
            <div className="col-sm-4 image">
                <img src={img} alt=""/>
            </div>
            <div className="details col-sm-7 ">
                <p id="title">{title}</p>
                <div className="lightgray">
                    <p>{guests} guests {bedrooms}bedrooms {beds}beds {baths}baths</p>
                    <p>{extra}</p>
                    <p>{status}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img className="star mr-1" src={star} alt=""/> 
                        <p className="font-weight-bold">{rating}({review})</p>
                    </div>
                    <div>
                        <span className="font-weight-bold">${price}</span><span className="lightgray">/night ($167 total)</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SingleHotel;