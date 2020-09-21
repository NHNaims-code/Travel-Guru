import React, { useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import './Home.css'
import fakeData from '../../fakeData/fakeData'

const Home = () => {
    const data = fakeData;
    const [currentResort, setCurrentResort] = useState(data[0]);
    console.log(data);
    return (
        <div className="home row container mx-auto mt-5 d-flex align-items-center">
            <div className="col-md-6 text-left">
                <h1>{currentResort.name}</h1>
                <p>{currentResort.shortDescription}</p>
                <button class="btn btn-warning">booking <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
            </div>
            <div className="col-md-6 d-flex d-flex">
                {
                    data.map(singleData => <SingleCard id={singleData.id} data={singleData} setCurrentResort={setCurrentResort}></SingleCard>)
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