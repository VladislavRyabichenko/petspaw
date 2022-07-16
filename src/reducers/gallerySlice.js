import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestGet } from "../components/gallery/API/galleryAPI";
import { requestGetBreeds } from "../components/gallery/API/galleryAPI";

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

const getOnlyNameId = (data) => {
  let formatted = [];
  data.map((entity) => {
    formatted.push({
      id: entity.id,
      name: entity.name,
    });
  });
  return formatted;
};

const createChunks = (arr) => {
  let size = 5; //размер подмассива
  let subarray = []; //массив в который будет выведен результат.
  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    subarray[i] = arr.slice(i * size, i * size + size);
  }
  return subarray;
};

export const fetchImages = createAsyncThunk("getImages", async (data) => {
  console.log("data", data);
  const response = await requestGet(data); //await service.getImages()
  console.log("responese", response);
  return response;
});

export const fetchBreeds = createAsyncThunk("getBreeds", async () => {
  const response = await requestGetBreeds(); //await service.getImages()
  console.log("responese", response);
  return response;
});

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setLimitFilter: (state, action) => {
      state.filters.limit = action.payload;
    },

    setBreedFilter: (state, action) => {
      state.filters.breedID = action.payload;
    },

    setTypeFilter: (state, action) => {
      state.filters.type = action.payload;
    },
    // setCurrentImages: (state, action) => {
    //     state.images = action.payload
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        console.log("loading");
        state.status = "loading";
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = "idle";
        console.log("loaded");
        state.images = createChunks(action.payload);
      })

      .addCase(fetchBreeds.pending, (state) => {
        console.log("loading breeds");
        state.status = "loading";
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.status = "idle";
        console.log("loaded breeds");
        let formattedBreeds = getOnlyNameId(action.payload);
        state.breeds = formattedBreeds;
      });
  },
});

export default gallerySlice.reducer;
