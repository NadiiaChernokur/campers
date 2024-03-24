import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const code = '65fc3eb114650eb2100bf5f9';
axios.defaults.baseURL = `https://${code}.mockapi.io/api`;

export const getCampers = createAsyncThunk('campers', async (_, thunkAPI) => {
  try {
    const respons = await axios.get('/campers?limit=4&page=1');
    return respons.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addFavorite = createAsyncThunk(
  'autos/addFavorite',
  async (id, thunkAPI) => {
    try {
      if (id) {
        const respons = await axios.get(`/campers`);
        const selectedAuto = respons.data.find((auto) => auto._id === id);

        return selectedAuto;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFavoriteItem = (id) => {
  return {
    type: 'autos/removeFavoriteItem',
    payload: id,
  };
};
