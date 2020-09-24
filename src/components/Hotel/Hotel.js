import React, { useContext } from 'react';
import hotelInfo from '../../fakeData/hotelInfo';
import HotelCard from '../HotelCard/HotelCard';
import SingleCard from '../SingleCard/SingleCard';
import SingleHotel from '../SingleHotel/SingleHotel';
import fakeData from '../../fakeData/fakeData'
import './Hotel.css';
import { ResponsiveEmbed } from 'react-bootstrap';
import { bookingContext } from '../../App';

const Hotel = () => {
    const data = hotelInfo;
    // const data = fakeData;
    const [currentResort, setCurrentResort,signedInUser, setSignedInUser, travelDate, setTravelDate] = useContext(bookingContext)
    return (
        <div className="row bg-white mx-auto container hotel">
            <div className="col-md-7">
                <div className="text-left m-0">
                <p className="status">252 stays {travelDate.month} {travelDate.from}-{travelDate.to} 3 guests</p>
                <p className="headline">Stay in {currentResort.name}</p>
                </div>
               <div className="hotel-info">
                {
                    data.map(singleData => <SingleHotel data={singleData}></SingleHotel>)
                }
               </div>
            </div>
            <div className="col-md-5 h-100 w-100  rounded">
            <div className="align-items-center justify-content-center h-100 w-100 p-5">
            <ResponsiveEmbed className="map">
                <embed type="image/svg+xml" src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBqP6zuRVabdqTOFqEmFnqZIbiXmWwahkQ&q=${currentResort.name},Bangladesh`} />
            </ResponsiveEmbed>
            </div>
            </div>
        </div>
    );
};

export default Hotel;