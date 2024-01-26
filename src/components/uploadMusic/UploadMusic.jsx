import React from 'react';
import './uplaodMusic.css'; 
import uploadIcon from '../../icons/upload.png';
import UploadPopap from './UploadPopap';
import { useDispatch, useSelector } from 'react-redux';
import { setUploadPopapIsOpen } from '../../store/common/slice';

const UploadMusic = () => {
    const uploadPopapIsOpen = useSelector(store=>store.common.uploadPopapIsOpen); 
    const dispatch = useDispatch();
    const hendleUploadClick = () => {
        dispatch(setUploadPopapIsOpen(!uploadPopapIsOpen))
    }
    return (
        <div data-testid="test">
            <button className='uploadMussicButton' onClick={hendleUploadClick}>
                Upload 
            </button>
            {uploadPopapIsOpen ? <UploadPopap /> : null}
            
        </div>
    );
}

export default UploadMusic;
