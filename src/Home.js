import React, { useState } from 'react'
import Navigation from './Navigation'
import Banner from './Banner';
import SearchExcercise from './SearchExcercise';
import Exercises from './Excercises';
import ExcerciseDetail from './ExcerciseDetail';

const Home = () => {
    const [bodyPart, setBodyPart] = useState('');

    return (
        <div>
            <div className='bg'>
                <Navigation />
                <Banner />
                <SearchExcercise setBodyPart={setBodyPart} />
            </div>
            <Exercises bodyPart={bodyPart} />
            <ExcerciseDetail />
        </div>
    )
}

export default Home
