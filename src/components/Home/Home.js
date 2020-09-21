import React from 'react';
import SingleCard from '../SingleCard/SingleCard';
import './Home.css'

const Home = () => {
    return (
        <div className="home row container mx-auto mt-5 d-flex align-items-center">
            <div className="col-md-6 text-left">
                <h1>Cox's bazar</h1>
                <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south.</p>
                <button class="btn btn-warning">booking <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
            </div>
            <div className="col-md-6 d-flex">
                <SingleCard></SingleCard>
                <SingleCard></SingleCard>
                <SingleCard></SingleCard>
            </div>
            <div className="nextPrevious">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
        </div>
    );
};

export default Home;