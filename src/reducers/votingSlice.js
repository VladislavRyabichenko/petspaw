import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { requestGet } from "../components/gallery/API/galleryAPI";
// import { fetchBreeds, fetchImages } from "./gallerySlice";

import { fetchFavourites } from "../components/voting/votingAPI/votingAPI";
import { postFavourite } from "../components/voting/votingAPI/votingAPI";
import { deleteFavourite } from "../components/voting/votingAPI/votingAPI";

const initialState = {
  images: [],
  currentImage: {
    id: "",
    url: "",
  },
  liked: [],
  disliked: [],
  favourites: {},
  userLogs: [],
  status: "idle",
};

export const selectVotingImage = (state) => state.currentImage;

export const postFavouriteImage = createAsyncThunk(
  "postFavourite",
  async (id) => {
    // const response = await postFavourite(id); //await service.getImages()
    const response = await postFavourite(id).then(() => fetchFavourites()); //await service.getImages()
    return response;
  }
);

export const deleteFavouriteImage = createAsyncThunk(
  "deleteFavourite",
  async (id) => {
    const response = await deleteFavourite(id).then(() => fetchFavourites());

    return response;
  }
);

export const getFavouriteImages = createAsyncThunk("getFavourite", async () => {
  const response = await fetchFavourites(); //await service.getImages()
  return response;
});

export const votingSlice = createSlice({
  name: "voting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavouriteImages.pending, (state) => {
        console.log("loading");
        state.status = "loading";
      })
      .addCase(getFavouriteImages.fulfilled, (state, action) => {
        console.log("loading");

        let favouritesList = {};
        action.payload.forEach((elem) => {
          favouritesList[elem.image_id] = elem.id;
        });

        console.log("FAVOURITES", favouritesList);
        state.favourites = { ...favouritesList };

        state.status = "loading";
      })
      .addCase(postFavouriteImage.pending, (state) => {
        console.log("loading");
        state.status = "loading";
      })
      .addCase(postFavouriteImage.fulfilled, (state, action) => {
        state.status = "idle";
        console.log("new favourites", action.payload);

        // let favourites = {}
        // action.payload.forEach( elem => {

        // })

        // state.favourites = {...state.favourites, }
        console.log("loaded");
      });
  },
});

export const updateFavourites = (id) => (dispatch, getState) => {
  const state = getState();
  if (!state.voting.favourites[id]) {
    dispatch(postFavouriteImage(id));
  } else {
    dispatch(deleteFavouriteImage(state.voting.favourites[id]));
  }
};

export default votingSlice.reducer;
