import React, { useEffect } from 'react';
import { useState } from 'react';
import './header.css';
import arrowDownIcon from '../../icons/arrow-down.png';
import arrowRightIcon from '../../icons/arrow-right.png';
import plusIcon from '../../icons/plus.png';
import musicData from '../../data/musicData';
import ReactAudioPlayer from 'react-audio-player';


const Header = () => {
    const [playAll, setPlayAll] = useState(0);
    const [links, setLinks] = useState([])
    const hendlePlayAllClick = () => {
        setLinks(
            musicData.map((song) => {
                return song.url
            })
        )
        setPlayAll(playAll + 1)
        console.log("all songs is playing");
    }
    let playNext;
    useEffect(() => {
        playNext = () => {
            links.shift();
            let current = links; 
            setPlayAll(playAll + 1)
            setLinks(current)
        }
    })
    const hendleAddAllClick = () => {
        console.log("all Songs added to the list");
    }



    return (
        <div className='headerConteiner' data-testid="test-1">
            <div>
                <button className='playAllButton' onClick={hendlePlayAllClick}><img src={arrowRightIcon} alt="oops" /> Play All</button>
                <button className='playAllDrop'><img src={arrowDownIcon} alt="oops" /></button>
                <button className='addAllButton' onClick={hendleAddAllClick}><img src={plusIcon} alt="oops" /> Add All</button>
                <button className='addAllDrop'><img src={arrowDownIcon} alt="oops" /></button>
            </div>
            <div>
                <button className='trackNumberButton'>track Number </button>
                <input type="text" placeholder='Filter' className='searchInput'/>
            </div>
            {
                playAll ? <ReactAudioPlayer 
                className='player'
                autoPlay 
                src={links[0]}
                onEnded={() => playNext()}
                /> : null
            }
        </div>
    );
}

export default Header;
