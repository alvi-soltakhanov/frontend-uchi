import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCats = createAsyncThunk(
  "cats/fetchCats",
  async function (page) {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=15&page=${page}&order=Desc`,
      {
        headers: {
          "x-api-key": "$$.env.x-api-key",
        },
      }
    );
    const data = await response.json();
    return data;
  }
);

const catsSlice = createSlice({
  name: "cats",
  initialState: {
    cats: [],
    favorite: [],
    status: null,
    error: null,
  },
  reducers: {
    addFavoriteImage(state, action) {
      state.favorite.push({
        id: action.payload.id,
        url: action.payload.url,
      });
    },

    deleteFavoriteImage(state, action) {
      state.favorite.filter((item) => {
        console.log(action.payload.id);
        return item.id !== action.payload;
      });
    },
  },
  extraReducers: {
    [fetchCats.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchCats.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.cats = state.cats.concat(action.payload);
    },
    [fetchCats.rejected]: (state, action) => {
      state.error = "Ошибка";
    },
  },
});

export const { addFavoriteImage, deleteFavoriteImage } = catsSlice.actions;
export default catsSlice.reducer;
