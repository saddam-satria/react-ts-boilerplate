import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import store from "../store";

interface IExample {
  name: string;
}

const initialExample: IExample = {
  name: "",
};

const exampleSlicer = createSlice({
  name: "example",
  initialState: initialExample,
  reducers: {
    setName: (state: IExample, action: PayloadAction<IExample, string>) => {
      state.name = action.payload.name;
    },
  },
});

const exampleReducer = exampleSlicer.reducer;
export const exampleAction = exampleSlicer.actions;

export const exampleState = (state: store) => state.posts;

export default exampleReducer;
