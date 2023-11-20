import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState:({
        value: 0,
        username:"aishat"
    }),
    reducers:{
        increament:(state) =>{
            state.value += 1
        }
    }
   
})

export default counterSlice.reducer
export const {
    increament
} = counterSlice.actions