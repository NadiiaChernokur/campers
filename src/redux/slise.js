import { createSlice } from '@reduxjs/toolkit';
import { addFavorite, getCampers } from './operation';

const initialState = {
  campersArray: [],
  favoriteArray: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleGetInformationFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.campersArray = action.payload;
};

const addFavoriteArrayFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.favoriteArray.push(action.payload);
};
// const removeFavoriteArrayFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.favoriteArray = state.favoriteArray.filter(
//     (id) => id !== action.payload
//   );
// };

const autoSlice = createSlice({
  name: 'autos',
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getCampers.pending, handlePending)
      .addCase(getCampers.fulfilled, handleGetInformationFulfilled)
      .addCase(getCampers.rejected, handleRejected)
      .addCase(addFavorite.pending, handlePending)
      .addCase(addFavorite.fulfilled, addFavoriteArrayFulfilled)
      .addCase(addFavorite.rejected, handleRejected),
  // .addCase(actionTypes.removeFavorite.pending, handlePending)
  // .addCase(
  //   actionTypes.removeFavorite.fulfilled,
  //   removeFavoriteArrayFulfilled
  // )
  // .addCase(actionTypes.removeFavorite.rejected, handleRejected),
});

export const autoReducer = autoSlice.reducer;
