// SearchExercise.js

import React, { useEffect, useState } from 'react';
import { fetchData, excerciseOptions } from './fetchData';
import logo from './logo.jpg';

const SearchExercise = ({ setBodyPart }) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    const findExercise = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const exercisePart = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList`, excerciseOptions);
                setBodyParts(['All', ...exercisePart]); // Ensure 'All' is an array element
                console.log(exercisePart);
            } catch (error) {
                console.error('Error fetching exercise data:', error);
            }
        };

        fetchExercises();
    }, [search]);

    return (
        <div>
            <h3>Awesome Exercises You Should Know</h3>
            <div className='search'>
                <input type='text' onChange={findExercise} value={search} placeholder='Enter Exercise type here' />
                <button onClick={findExercise}>Search</button>
            </div>
            <div className='parts'>
                <div className='card-container'>
                    {bodyParts.map((iter, id) => {
                        return (
                            <div key={id} className='card' onClick={() => setBodyPart(iter)}>
                                <img src={logo} alt="Body Part Icon" />
                                <h3>{iter}</h3>
                            </div>
                        );
                    })}
                </div>
                <div className='scroll-buttons'>
                    <button className='scroll-button left'>←</button>
                    <button className='scroll-button right'>→</button>
                </div>
            </div>
        </div>
    );
};

export default SearchExercise;
