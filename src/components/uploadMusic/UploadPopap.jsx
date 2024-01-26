import React, { useState } from 'react';
import './uploadpopap.css';
import closeIcon from '../../icons/close.png'
import { useDispatch, useSelector } from 'react-redux';
import { setUploadPopapIsOpen, setSuccesUploadedFile } from '../../store/common/slice';

const UploadPopap = () => {
    const uploadPopapIsOpen = useSelector(store=>store.common.uploadPopapIsOpen); 
    const succesUploadedFile = useSelector(store=>store.common.succesUploadedFile)
    const dispatch = useDispatch();
    const [valid, setValid] = useState(false)
    const hendleCloseClick = () => {
        dispatch(setUploadPopapIsOpen(!uploadPopapIsOpen))
    }
    const successFile = (e, file) => {
        console.log(e);
        e.preventDefault();
        dispatch(setSuccesUploadedFile(file));
    }

    let selectedFile;
    const hendleFileChange = (ev) => {
        selectedFile = ev.target.files[0];
        const validTypes = ["audio/mpeg", "audio/wav"]
        if (!validTypes.includes(selectedFile.type)) {
            console.error("error")
            setValid(true);
        }
        return selectedFile;
    }
    
    console.log(succesUploadedFile);

    return (
        <div className='uploadPopapContainer'>
            <div className='innerUploadPopapContainer'>
                <img src={closeIcon} alt="oops" onClick={hendleCloseClick} className='closeButton'/>
                <form className='uploadForm' onSubmit={(e) => successFile(e, selectedFile)}>
                    <p>Artist Name</p>
                    <input type="text" className='artistNameInput'/>
                    <p>Song Name</p>
                    <input type="text"  className='songNameInput'/>  
                    <div >
                        {valid ? <input type="file" className='choseFileInputError' onChange={hendleFileChange}/> 
                        : <input type="file" className='choseFileInput' onChange={hendleFileChange}/>
                        }
                        
                    </div>
                    <div>
                        <input type="submit" className='submitInput' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UploadPopap;
