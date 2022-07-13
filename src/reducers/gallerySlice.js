import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  status: "idle",
  filters: {
    breedID: "",
    type: "jpg,png,gif",
    limit: "5",
    order: "DESC",
    page: 0,
  },
  breeds: [],
};

export const selectFilters = (state) => state.filters;
export const selectImages = (state) => state.images;

export const fetchImages = createAsyncThunk("getImages", async (data) => {});

export const fetchBreeds = createAsyncThunk("getBreeds", async () => {});

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
});

export default gallerySlice.reducer;
