import React from 'react';

function SubTypes({ type }) {
    // Define the content based on the filter type clicked
    let content;
    switch (type) {
        case 'Biceps':
        case 'Triceps':
        case 'Quadriceps':
        case 'Hamstrings':
        case 'Deltoids':
            content = <div>{type} content goes here</div>;
            break;
        case 'Beginner':
        case 'Intermediate':
        case 'Advanced':
            content = <div>{type} content goes here</div>;
            break;
        case 'Strength':
        case 'Endurance':
        case 'Flexibility':
            content = <div>{type} content goes here</div>;
            break;
        default:
            content = <div>No content available</div>;
            break;
    }

    return (
        <div>
            <h2>{type}</h2>
            {content}
        </div>
    );
}

export default SubTypes;
