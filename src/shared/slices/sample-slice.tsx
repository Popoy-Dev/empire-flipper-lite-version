import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from '../../app/store'

// create file for status
import {
  resetActionStatus,
  initActionStatus,
  successActionStatus,
  failedActionStatus,
} from "../constant/status-constant";
// Define a type for the slice state
interface SampleState {
  data: [];
}

// Define the initial state using that type
const initialState: SampleState = {
  data: [],
};

export const counterSlice = createSlice({
  name: "sample",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getSampleData: (state) => ({
      ...state,
      status: {
        initActionStatus,
      },
      type: "sampleData",
    }),
    getSampleDataSuccess: (state, { payload }: PayloadAction<[]>) => ({
      ...state,

      data: payload,
      status: {
        successActionStatus,
      },
      type: "sampleData",
    }),
    // Use the PayloadAction type to declare the contents of `action.payload`
    getSampleDataFailed: (state, { payload }: PayloadAction<any>) => ({
      ...state,
      data: payload,
      status: {
        failedActionStatus,
      },
      type: "sampleData",
    }),
  },
});

// can access this part inside components using by importing
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default counterSlice;
