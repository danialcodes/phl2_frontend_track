import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increament: (state,action)=>{
            state.count += action.payload;
        },
        decreament: (state,action)=>{
            state.count -= action.payload;
        }
    }
})

export const { increament, decreament } = counterSlice.actions;

export default counterSlice.reducer;