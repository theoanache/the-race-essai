import React from 'react';

const Score = ({id, number}) => {
    return (
        <div>
            <p> Score lancer {`${id}`} : {number} </p>
        </div>
    );
};

export default Score;