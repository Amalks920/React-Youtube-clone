import { createSlice } from "@reduxjs/toolkit";

const searchCacheSlice=createSlice({
    name:"search",
    initialState:{},

    reducers:{
        cacheResults:(state,action)=>{
            state=Object.assign(state,action.payload);
            
        }
    }

})

export const {cacheResults}=searchCacheSlice.actions

export default searchCacheSlice.reducer;