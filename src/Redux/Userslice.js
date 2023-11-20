import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
    name:"users",
    initialState:{
        alluser:[],
        isfetching:false,
        fetcherror:null
    },
    reducers:{
        fetching: (state) =>{
           state.alluser= []
           state.isfetching = true
           state.fetcherror = null
        },
        fetchsuccessful:(state, action) =>{
            state.alluser = action.payload
            state.isfetching = false
            state.fetcherror = null
        },
        fetchfailed: (state, action) =>{
            state.alluser = []
            state.isfetching = false
            state.fetcherror = action.payload
        }
    }
    
})
 
 export default user.reducer
 export const {fetching, fetchsuccessful, fetchfailed} = user.actions