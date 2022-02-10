import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeatherAction = createAsyncThunk(
  "weather/fetch",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      
      const data2 = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
      )
      const val = await data2.json();
      const latt = val.coord.lat
      const lonn = val.coord.lon

      const data3 = await axios.get(
        `http://api.openweathermap.org/data/2.5/onecall?lat=${latt}&lon=${lonn}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
      );
      return data3;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data3);
    }
  }
);
const weatherSlice = createSlice({
  name: "weather",
  initialState: {},
  extraReducers: builder => {
    builder.addCase(fetchWeatherAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
      state.weather = action?.payload?.data;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchWeatherAction.rejected, (state, action) => {
      state.loading = false;
      state.weather = undefined;
      state.error = action?.payload?.data;
    });
  },
});
export default weatherSlice.reducer;
