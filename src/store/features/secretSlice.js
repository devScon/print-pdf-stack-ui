import {createSlice} from "@reduxjs/toolkit";
import { useradded } from "./userSlice";
const initialState = {id: null, secret: null}

const secretSlice = createSlice({
	name: 'secret',
	initialState,
	reducers: {
		secretadded: (state, action) => {
			state.id = action.payload.id
            state.secret = action.payload.secret
		},
        secretupdated: (state, action) => {
            state.secret = action.payload.secret
        },
		secretremoved: (state) => {
			state.id = null
            state.secret = null
		}
	},
	extraReducers: (builder) => {
        builder.addCase(useradded, (state, action) => {
            state.id = action.payload.id
        })
    }
})

export default secretSlice.reducer
export const {secretadded, secretupdated, secretremoved} = secretSlice.actions