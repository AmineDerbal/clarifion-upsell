import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  screenWidth: '',
};

const screenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    getScreenWidthName: (state, action) => {
      const screenWidth = action.payload;
      return { ...state, screenWidth };
    },
  },
});

export const { getScreenWidthName } = screenSlice.actions;
export default screenSlice.reducer;
