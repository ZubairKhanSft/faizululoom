import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    language : 'en',
};

const languageSlice = createSlice({

    name:'language',
    initialState: initialState,
    reducers:{
            setLanguage:(state,action) => {
                state.language = action.payload;
            }
    },
});


export const {setLanguage} = languageSlice.actions;
export const selectLanguage = (state) => state.language.language;

export default languageSlice.reducer;