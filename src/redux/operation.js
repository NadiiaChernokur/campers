import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const code = '65fc3eb114650eb2100bf5f9';

axios.defaults.baseURL = `https://${code}.mockapi.io/api`;

export const getCampers = createAsyncThunk('campers', async (_, thunkAPI) => {
  try {
    const respons = await axios.get('/campers');

    return respons.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addFavorite = createAsyncThunk(
  'autos/addFavorite',
  async (id, thunkAPI) => {
    console.log(id);
    try {
      const respons = await axios.get(`/api/campers/:${id}`);
      console.log(respons.data);
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
