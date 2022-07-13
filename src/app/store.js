import { configureStore } from '@reduxjs/toolkit';
import votingReducer from "../reducers/votingSlice";
import galleryReducer from "../reducers/gallerySlice";


export const store = configureStore({
  reducer: {
    voting:  votingReducer,
    gallery: galleryReducer
  },
});
