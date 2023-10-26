import {createSlice} from "@reduxjs/toolkit";


const initialState = {id: null}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		useradded: (state, action) => {
			state.id = action.payload.id
		},
		userremoved: (state) => {
			state.id = null
		}
	}
})

export default userSlice.reducer
export const {useradded, userremoved} = userSlice.actions