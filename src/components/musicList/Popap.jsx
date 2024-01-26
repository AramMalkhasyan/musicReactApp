import React from 'react';
import './popap.css';
import { useSelector, useDispatch } from 'react-redux';
import { setIsOpen } from '../../store/common/slice';
import closeIcone from '../../icons/close.png';


const Popap = () => {
    const popapState = useSelector(store=>store.common.popapIsOpen);
    const currentSong = useSelector(store=>store.common.currentSong);
    const dispatch = useDispatch();
    return (
        <div className='popapContainer'>
            <div className='innerPopapContainer'>
                <img src={closeIcone} alt="oops" className='closeButton' onClick={() => dispatch(setIsOpen(!popapState))}/>
                <div className='infoBlock'>
                    <p>song name: {currentSong.songName}</p>
                    <p>Artist Name: {currentSong.ArtistName}</p>
                    <p>Track number: {currentSong.id}</p>
                 </div>
            </div>
            
        </div>
    );
}

export default Popap;
