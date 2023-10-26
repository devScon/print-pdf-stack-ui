import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import userReducer from './features/userSlice';
import secretReducer from './features/secretSlice';
import secretCodeSlice from './features/secretCodeSlice';

const logger = createLogger()

export const store = configureStore({
	reducer: {
		user : userReducer,
        secret: secretReducer,
        code: secretCodeSlice
	},
	middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(logger)
})
