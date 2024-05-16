import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

function BodyPartsList() {
    const [bodyPartData, setBodyPart] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [muscleTypes, setMuscleTypes] = useState([]);
    const [difficultyLevels, setDifficultyLevels] = useState([]);
    const [exerciseTypes, setExerciseTypes] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        fetchData('https://api.api-ninjas.com/v1/exercises');
    }, []);

    const fetchData = (url) => {
        const options = {
            headers: {
                'X-Api-Key': 'WiFYVtx/DUBx2enRxFDY1g==ieL7fo5Ah1X97g3L'
            }
        };

        Axios.get(url, options)
            .then(response => {
                console.log(response.data);
                setBodyPart(response.data);
            })
            .catch(error => {
                console.error('Request failed:', error);
            });
    };

    const displayAll = () => {
        fetchData('https://api.api-ninjas.com/v1/exercises');
        setMuscleTypes([]);
        setDifficultyLevels([]);
        setExerciseTypes([]);
    };

    const displayFilter = (filterType) => {
        if (filterType === 'mt') {
            setMuscleTypes(['Biceps', 'Triceps', 'Quadriceps', 'Hamstrings', 'Deltoids']);
            setFilteredList([]);
            setDifficultyLevels([]);
            setExerciseTypes([]);
        } else if (filterType === 'dl') {
            setDifficultyLevels(['Beginner', 'Intermediate', 'Advanced']);
            setFilteredList([]);
            setMuscleTypes([]);
            setExerciseTypes([]);
        } else if (filterType === 'et') {
            setExerciseTypes(['Strength', 'Endurance', 'Flexibility']);
            setFilteredList([]);
            setMuscleTypes([]);
            setDifficultyLevels([]);
        } else {
            // Handle individual item click
            const filteredItems = bodyPartData.filter(item => item.someKey === filterType);
            setFilteredList(filteredItems);
            setMuscleTypes([]);
            setDifficultyLevels([]);
            setExerciseTypes([]);
        }
    };
    

    const displaySubFilter = (subFilterType) => {
        let filteredItems = [];

        if (subFilterType === 'Biceps' || subFilterType === 'Triceps' || subFilterType === 'Quadriceps' || subFilterType === 'Hamstrings' || subFilterType === 'Deltoids') {
            filteredItems = bodyPartData.filter(item => item.muscle === subFilterType);
        } else if (subFilterType === 'Beginner' || subFilterType === 'Intermediate' || subFilterType === 'Advanced') {
            filteredItems = bodyPartData.filter(item => item.difficulty === subFilterType);
        } else if (subFilterType === 'Strength' || subFilterType === 'Endurance' || subFilterType === 'Flexibility') {
            filteredItems = bodyPartData.filter(item => item.exercise_type === subFilterType);
        }

        setFilteredList(filteredItems);
    };

    const openPopup = (item) => {
        setSelectedItem(item);
        setShowPopup(true);
    };

    const closePopup = () => {
        setSelectedItem(null);
        setShowPopup(false);
    };

    return (
        <div className="body-parts-container">
            <h3 className="title">Hii</h3>
            <div className="buttons-container">
                <button onClick={() => displayAll()} className="filter-button">All</button>
                <button onClick={() => displayFilter('mt')} className="filter-button">Filter by Muscle Type</button>
                <button onClick={() => displayFilter('dl')} className="filter-button">Filter by Difficulty Level</button>
                <button onClick={() => displayFilter('et')} className="filter-button">Filter by Exercise Type</button>
            </div>
            <div className="list-container">
                <div className="list">
                    {muscleTypes.map((muscle, index) => (
                        <div key={index} className="item" onClick={() => displaySubFilter(muscle)}>{muscle}</div>
                    ))}
                    {difficultyLevels.map((level, index) => (
                        <div key={index} className="item" onClick={() => displaySubFilter(level)}>{level}</div>
                    ))}
                    {exerciseTypes.map((type, index) => (
                        <div key={index} className="item" onClick={() => displaySubFilter(type)}>{type}</div>
                    ))}
                    {filteredList.map((item, index) => (
                        <div key={index} className="item" onClick={() => openPopup(item)}>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closePopup}>&times;</span>
                        <div>Name: {selectedItem.name}</div>
                        <div>Description: {selectedItem.description}</div>
                        <div>Muscle: {selectedItem.muscle}</div>
                        <div>Difficulty: {selectedItem.difficulty}</div>
                        <div>Exercise Type: {selectedItem.exercise_type}</div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BodyPartsList;
