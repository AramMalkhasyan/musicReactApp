import React from 'react';
import './nameSection.css';

const NameSection = () => {
    return (
        <div className='nameSecBlock' data-testid="test-2">
            <div className='playEmptyArea'>

            </div>
            <div className='songNameArea'>
                <p>Song Name</p>
            </div>
            <div className='artistNameArea'>
                <p>Artist Name</p>
            </div>
            <div className='trackArea'>
                <p>Track</p>
            </div>
            <div className='reactionEmptyArea'>

            </div>
        </div>
    );
}

export default NameSection;
