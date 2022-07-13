
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
    images : [],
    currentImage : {
        id: "",
        url: "",
    },
    liked: [],
    disliked: [],
    favourites: [],
    voting_history: [],
    status: 'idle',
};

export const selectVotingImage = state => state.currentImage



export const votingSlice = createSlice({
    name: 'voting',
    initialState,
    reducers: {

    },

});


export default votingSlice.reducer;
