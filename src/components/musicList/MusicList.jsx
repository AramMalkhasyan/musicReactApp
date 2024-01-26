import React from 'react';
import './musicList.css';
import ReactAudioPlayer from 'react-audio-player';
import { useState } from 'react';
import musicData from '../../data/musicData';
import playIcon from '../../icons/play.png';
import dotsIcon from '../../icons/dots.png';
import likeIcon from '../../icons/like.png';
import likedIcon from '../../icons/liked.png';
import checkMarkIcon from '../../icons/check-mark.png';
import shareIcon from '../../icons/share.png';
import arrowDownGreyIcon from '../../icons/arrow-down-grey.png';
import pauseIcon from '../../icons/pause.png';
import Popap from './Popap';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen, setCurrentSong } from '../../store/common/slice';




const MusicList = () => {
    const popapState = useSelector(store=>store.common.popapIsOpen);
    const dispatch = useDispatch();
    const [musicDataList, setMusicDataList] = useState(musicData); 
    const playMusic = (id) => {
        setMusicDataList(
            musicDataList.map((song) => {
                if (song.isPlaying) {
                    song.isPlaying = !song.isPlaying;
                }else if (song.id == id) {
                    song.isPlaying = !song.isPlaying;
                }
                return song
            })
        )
    }
    
    const hendleLike = (id) => {
        setMusicDataList(
            musicDataList.map((song) => {
                if (song.id == id) {
                    song.liked = !song.liked
                }
                return song;
            })
        )

    }
    



    return (
        <>
        {
            musicData.map((song) => {
                return (
                    <div className='listItem' key={song.id}>
                        <img src={dotsIcon} 
                        alt="oops" 
                        className='dragAndDropIcon' 
                        onClick={() => {
                            dispatch(setIsOpen(!popapState))
                            dispatch(setCurrentSong(song))
                            }} />
                        {
                        song.isPlaying ? <img src={pauseIcon} alt="oops" className='playIcon' onClick={ () => playMusic(song.id)}/> 
                        : <img src={playIcon} alt="oops" className='playIcon' onClick={ () => playMusic(song.id)}/>
                        }
                        
                        <span className='songName'>{song.songName}</span>
                        <span className='artistName'>{song.ArtistName}</span>
                        <span className='trackNumber'>{song.id}</span>
                        <div className='iconsCont'>
                            {song.liked ? <span><img src={likedIcon} alt="oops" onClick={() => hendleLike(song.id) } className='likeButton'/></span> 
                            : <span><img src={likeIcon} alt="oops" onClick={() => hendleLike(song.id)} className='likeButton'/></span>
                            }
                            <span><img src={checkMarkIcon} alt="oops" className='ChackMarkButton' /></span>
                            <span><img src={shareIcon} alt="oops" className='ShareButton'/></span>
                            <span><img src={arrowDownGreyIcon} alt="oops" className='arrowDownButton' /></span>
                        </div>
                        {
                        song.isPlaying ? <ReactAudioPlayer 
                        autoPlay 
                        src={song.url}/> 
                        : null
                        }
                    </div>
                )
            })
        }  
        {popapState ? <Popap /> : null}
        </>
    );
    
}

export default MusicList;

