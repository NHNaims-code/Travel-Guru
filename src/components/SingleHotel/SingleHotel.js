import React from 'react';
import './SingleHotel.css'
import star from '../../Icon/star_1_.png'

const SingleHotel = () => {
    return (
        <div className="d-flex">
            <img className="image" src="https://i.ibb.co/gdLhSyk/img2.png" alt=""/>
            <div className="details">
                <p id="title">AR Loung</p>
                <p>4 guests 2bedrooms 2beds 2baths</p>
                <p>wifi Air conditioning Kitchen</p>
                <p>Cancellation fedibility availiable</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center mt-2">
                        <img className="star mr-1" src={star} alt=""/> 
                        <p>4.9(25)</p>
                    </div>
                    <div>
                        $44/night ($167 total)
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SingleHotel;