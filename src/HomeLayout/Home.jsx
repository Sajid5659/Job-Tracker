import React from 'react';
import Banner from './Banner';
import HowItWorks from './HowItWorks';
import { useLoaderData } from 'react-router';
import Companies from './Companies';

const Home = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Companies data={data}></Companies>
        </div>
    );
};

export default Home;