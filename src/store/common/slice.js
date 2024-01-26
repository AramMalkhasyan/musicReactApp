import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    popapIsOpen: false,
    currentSong: {},
    uploadPopapIsOpen: false,
    succesUploadedFile: {}
}

const commonSlice = createSlice({
    name: 'popap',
    initialState,
    reducers: {
       setIsOpen: (state, {payload}) => {
            state.popapIsOpen = payload;
        },
        setCurrentSong: (state, {payload}) => {
            state.currentSong = payload;
        },
        setUploadPopapIsOpen: (state, {payload}) => {
            state.uploadPopapIsOpen = payload;
        },
        setSuccesUploadedFile: (state, {payload}) => {
            state.succesUploadedFile = payload
        }
    }
    
});

export const { setIsOpen, setCurrentSong, setUploadPopapIsOpen, setSuccesUploadedFile } = commonSlice.actions;

export default commonSlice.reducer;

