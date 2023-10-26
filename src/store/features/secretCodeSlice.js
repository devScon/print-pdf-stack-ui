import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    code: {},
    error: null
}

export const fetchCode = createAsyncThunk('code/fetchCode', async (user) => {
    try {
        const response = await axios.get(`http://localhost:5000/print/${user}`)
        return response.data
    }catch(err){
        console.warn(err)
        return err;
    }
    
})

const secretCodeSlice = createSlice({
    name: 'secretCode',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCode.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCode.fulfilled, (state,action) => {
            state.loading = false 
            state.code = action.payoad 
            state.error= null
        })
        builder.addCase(fetchCode.rejected, (state, action) => {
            state.loading = false 
            state.code = null
            state.error= action.payload
        })
    }
})

export default secretCodeSlice.reducer