import React, { useState, useEffect } from 'react';
import { fetchData, excerciseOptions } from './fetchData';
const Excercises = ({ bodyPart }) => {
    const [bodyDetail, setBodyDetail] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState(null);

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                let epDetail = [];

                if (bodyPart === "All" || bodyPart === "") {
                    epDetail = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`, excerciseOptions);
                } else {
                    epDetail = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, excerciseOptions);
                }

                setBodyDetail(epDetail);
            } catch (error) {
                console.error('Error fetching exercise data:', error);
            }
        };

        fetchExercises();
    }, [bodyPart]);

    const openExerciseDetail = (exercise) => {
        setSelectedExercise(exercise);
        console.log(exercise);
    };

    const closeExerciseDetail = () => {
        setSelectedExercise(null);
    };

    return (
        <div>
            <h3>Showing Results for {bodyPart}</h3>
            <div className='exlist'>
                {bodyDetail && bodyDetail.map((exercise, id) => (
                    <div key={id} onClick={() => openExerciseDetail(exercise)}>
                        <img src={exercise.gifUrl} alt='' />
                        <h4>{exercise.bodyPart}</h4>
                        <h4>{exercise.equipment}</h4>
                        <h4>{exercise.name}</h4>
                        <h4>{exercise.target}</h4>
                    </div>
                ))}
            </div>
            {selectedExercise && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close-btn" onClick={closeExerciseDetail}>&times;</span>
                        <h2>{selectedExercise.name}</h2>
                        <p>Body Part: {selectedExercise.bodyPart}</p>
                        <p>Equipment: {selectedExercise.equipment}</p>
                        {/* Add more details as needed */}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Excercises;
