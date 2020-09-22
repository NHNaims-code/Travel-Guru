import React, { useContext } from 'react';
import { bookingContext } from '../../App';
import SingleCard from '../SingleCard/SingleCard';
import './Home.css'
import fakeData from '../../fakeData/fakeData'
import { Link } from 'react-router-dom';


const Home = () => {
    const [currentResort, setCurrentResort] = useContext(bookingContext);
    const data = fakeData;
    

    return (
        <div className="home row container mx-auto mt-5 d-flex align-items-center">
            <div className="col-md-6 text-left">
                <h1>{currentResort.name}</h1>
                <p>{currentResort.shortDescription}</p>
                <Link to={"/booking"}>
                <button class="btn btn-warning">booking <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                </Link>
            </div>
            <div className="col-md-6 d-flex d-flex">
                {
                    data.map(singleData => <SingleCard id={singleData.id} data={singleData}></SingleCard>)
                }
            </div>
            <div className="nextPrevious">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
        </div>
    );
};

export default Home;