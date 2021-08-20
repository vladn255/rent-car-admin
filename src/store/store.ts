import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../store/slices/auth-slice/auth-slice'

const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

export { store }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch