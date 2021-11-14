import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const textAnimationStore = createSlice({
  name: 'textAnimationStore',
  initialState: {
    textAnimation: 'APERTE',
  },
  reducers: {
    updateText(state, action: PayloadAction<string>) {
      state.textAnimation = action.payload;
    },
  },
});

export const {updateText} = textAnimationStore.actions;

export default textAnimationStore.reducer;
